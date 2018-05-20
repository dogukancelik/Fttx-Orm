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
    public class OdfsController : Controller
    {
        private FttxContext db = new FttxContext();

        // GET: Odfs
        public async Task<ActionResult> Index()
        {
            var odfs = db.Odfs.Include(o => o.Cati);
            return View(await odfs.ToListAsync());
        }

        // GET: Odfs/Details/5
        public async Task<ActionResult> Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Odf odf = await db.Odfs.FindAsync(id);
            if (odf == null)
            {
                return HttpNotFound();
            }
            return View(odf);
        }

        // GET: Odfs/Create
        public ActionResult Create()
        {
            ViewBag.CatiId = new SelectList(db.Catis, "CatiId", "CatiAdi");
            return View();
        }

        // POST: Odfs/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Create([Bind(Include = "OdfId,CatiId,Kapasite,OdfAdi,Durum")] Odf odf)
        {
            if (ModelState.IsValid)
            {
                db.Odfs.Add(odf);
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }

            ViewBag.CatiId = new SelectList(db.Catis, "CatiId", "CatiAdi", odf.CatiId);
            return View(odf);
        }

        // GET: Odfs/Edit/5
        public async Task<ActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Odf odf = await db.Odfs.FindAsync(id);
            if (odf == null)
            {
                return HttpNotFound();
            }
            ViewBag.CatiId = new SelectList(db.Catis, "CatiId", "CatiAdi", odf.CatiId);
            return View(odf);
        }

        // POST: Odfs/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Edit([Bind(Include = "OdfId,CatiId,Kapasite,OdfAdi,Durum")] Odf odf)
        {
            if (ModelState.IsValid)
            {
                db.Entry(odf).State = EntityState.Modified;
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }
            ViewBag.CatiId = new SelectList(db.Catis, "CatiId", "CatiAdi", odf.CatiId);
            return View(odf);
        }

        // GET: Odfs/Delete/5
        public async Task<ActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Odf odf = await db.Odfs.FindAsync(id);
            if (odf == null)
            {
                return HttpNotFound();
            }
            return View(odf);
        }

        // POST: Odfs/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> DeleteConfirmed(int id)
        {
            Odf odf = await db.Odfs.FindAsync(id);
            db.Odfs.Remove(odf);
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
