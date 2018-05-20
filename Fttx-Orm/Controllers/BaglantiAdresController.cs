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
    public class BaglantiAdresController : Controller
    {
        private FttxContext db = new FttxContext();

        // GET: BaglantiAdres
        public async Task<ActionResult> Index()
        {
            var baglantiAdres = db.BaglantiAdres.Include(b => b.Baglanti);
            return View(await baglantiAdres.ToListAsync());
        }

        // GET: BaglantiAdres/Details/5
        public async Task<ActionResult> Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            BaglantiAdres baglantiAdres = await db.BaglantiAdres.FindAsync(id);
            if (baglantiAdres == null)
            {
                return HttpNotFound();
            }
            return View(baglantiAdres);
        }

        // GET: BaglantiAdres/Create
        public ActionResult Create()
        {
            ViewBag.BaglantiId = new SelectList(db.Baglantis, "BaglantiId", "BaglantiAdi");
            return View();
        }

        // POST: BaglantiAdres/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Create([Bind(Include = "BaglantiAdresId,BaglantiId,KoordinatN,KoordinatS,Adres")] BaglantiAdres baglantiAdres)
        {
            if (ModelState.IsValid)
            {
                db.BaglantiAdres.Add(baglantiAdres);
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }

            ViewBag.BaglantiId = new SelectList(db.Baglantis, "BaglantiId", "BaglantiAdi", baglantiAdres.BaglantiId);
            return View(baglantiAdres);
        }

        // GET: BaglantiAdres/Edit/5
        public async Task<ActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            BaglantiAdres baglantiAdres = await db.BaglantiAdres.FindAsync(id);
            if (baglantiAdres == null)
            {
                return HttpNotFound();
            }
            ViewBag.BaglantiId = new SelectList(db.Baglantis, "BaglantiId", "BaglantiAdi", baglantiAdres.BaglantiId);
            return View(baglantiAdres);
        }

        // POST: BaglantiAdres/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Edit([Bind(Include = "BaglantiAdresId,BaglantiId,KoordinatN,KoordinatS,Adres")] BaglantiAdres baglantiAdres)
        {
            if (ModelState.IsValid)
            {
                db.Entry(baglantiAdres).State = EntityState.Modified;
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }
            ViewBag.BaglantiId = new SelectList(db.Baglantis, "BaglantiId", "BaglantiAdi", baglantiAdres.BaglantiId);
            return View(baglantiAdres);
        }

        // GET: BaglantiAdres/Delete/5
        public async Task<ActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            BaglantiAdres baglantiAdres = await db.BaglantiAdres.FindAsync(id);
            if (baglantiAdres == null)
            {
                return HttpNotFound();
            }
            return View(baglantiAdres);
        }

        // POST: BaglantiAdres/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> DeleteConfirmed(int id)
        {
            BaglantiAdres baglantiAdres = await db.BaglantiAdres.FindAsync(id);
            db.BaglantiAdres.Remove(baglantiAdres);
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
