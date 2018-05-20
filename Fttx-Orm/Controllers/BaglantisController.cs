using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using System.Net;
using System.Web;
using System.Web.Mvc;
using Fttx_Orm.DAL;
using Fttx_Orm.Models.fiber;

namespace Fttx_Orm.Controllers
{
    public class BaglantisController : Controller
    {
        private FttxContext db = new FttxContext();

        // GET: Baglantis
        public async Task<ActionResult> Index()
        {
            var baglantis = db.Baglantis.Include(b => b.Odf);
            return View(await baglantis.ToListAsync());
        }

        // GET: Baglantis/Details/5
        public async Task<ActionResult> Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Baglanti baglanti = await db.Baglantis.FindAsync(id);
            if (baglanti == null)
            {
                return HttpNotFound();
            }
            return View(baglanti);
        }

        // GET: Baglantis/Create
        public ActionResult Create()
        {
            ViewBag.OdfId = new SelectList(db.Odfs, "OdfId", "OdfAdi");
            ViewBag.BaglanitipId = new SelectList(db.BaglantiTips, "BaglantiTipId", "BaglantiTipAdi");
            return View();
        }

        // POST: Baglantis/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Create([Bind(Include = "BaglantiId,BaglanitipId,OdfId,BaglantiAdi")] Baglanti baglanti)
        {
            if (ModelState.IsValid)
            {
                db.Baglantis.Add(baglanti);
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }

            ViewBag.OdfId = new SelectList(db.Odfs, "OdfId", "OdfAdi", baglanti.OdfId);
            ViewBag.BaglanitipId = new SelectList(db.BaglantiTips, "BaglantiTipId", "BaglantiTipAdi");
            return View(baglanti);
        }

        // GET: Baglantis/Edit/5
        public async Task<ActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Baglanti baglanti = await db.Baglantis.FindAsync(id);
            if (baglanti == null)
            {
                return HttpNotFound();
            }
            ViewBag.OdfId = new SelectList(db.Odfs, "OdfId", "OdfAdi", baglanti.OdfId);
            ViewBag.BaglanitipId = new SelectList(db.BaglantiTips, "BaglantiTipId", "BaglantiTipAdi");
            return View(baglanti);
        }

        // POST: Baglantis/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Edit([Bind(Include = "BaglantiId,BaglanitipId,OdfId,BaglantiAdi")] Baglanti baglanti)
        {
            if (ModelState.IsValid)
            {
                db.Entry(baglanti).State = EntityState.Modified;
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }
            ViewBag.OdfId = new SelectList(db.Odfs, "OdfId", "OdfAdi", baglanti.OdfId);
            ViewBag.BaglanitipId = new SelectList(db.BaglantiTips, "BaglantiTipId", "BaglantiTipAdi");
            return View(baglanti);
        }

        // GET: Baglantis/Delete/5
        public async Task<ActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Baglanti baglanti = await db.Baglantis.FindAsync(id);
            if (baglanti == null)
            {
                return HttpNotFound();
            }
            return View(baglanti);
        }

        // POST: Baglantis/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> DeleteConfirmed(int id)
        {
            Baglanti baglanti = await db.Baglantis.FindAsync(id);
            db.Baglantis.Remove(baglanti);
            await db.SaveChangesAsync();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
