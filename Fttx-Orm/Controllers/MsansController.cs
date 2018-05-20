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
using Fttx_Orm.Models;

namespace Fttx_Orm.Controllers
{
    public class MsansController : BaseController
    {
        private FttxContext db = new FttxContext();

        // GET: Msans
        public async Task<ActionResult> Index()
        {
            var msans = db.Msans.Include(m => m.Cihaz);
            return View(await msans.ToListAsync());
        }

        // GET: Msans/Details/5
        public async Task<ActionResult> Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Msan msan = await db.Msans.FindAsync(id);
            if (msan == null)
            {
                return HttpNotFound();
            }
            return View(msan);
        }

        // GET: Msans/Create
        public ActionResult Create()
        {
           
            ViewBag.CihazId = new SelectList(db.Database.SqlQuery<Fttx_Orm.Models.Cihaz>("select * from Cihaz where CihazId not in (select CihazId from Msan where Durum=1) and Durum=1").ToList(), "CihazId", "CihazName");

            return View();
        }

        // POST: Msans/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Create([Bind(Include = "MsanId,CihazId,MsanAdi,MsanIp,Durum")] Msan msan)
        {
            if (ModelState.IsValid)
            {
                db.Msans.Add(msan);
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }

            ViewBag.CihazId = new SelectList(db.Database.SqlQuery<Fttx_Orm.Models.Cihaz>("select * from Cihaz where CihazId not in (select CihazId from Adrers where Durum=1) and Durum=1").ToList(), "CihazId", "CihazName",msan.CihazId);

            return View(msan);
        }

        // GET: Msans/Edit/5
        public async Task<ActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Msan msan = await db.Msans.FindAsync(id);
            if (msan == null)
            {
                return HttpNotFound();
            }
            ViewBag.CihazId = new SelectList(db.Database.SqlQuery<Fttx_Orm.Models.Cihaz>("select * from Cihaz where CihazId not in (select CihazId from Adrers where Durum=1) and Durum=1").ToList(), "CihazId", "CihazName", msan.CihazId);

            return View(msan);
        }

        // POST: Msans/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Edit([Bind(Include = "MsanId,CihazId,MsanAdi,MsanIp,Durum")] Msan msan)
        {
            if (ModelState.IsValid)
            {
                db.Entry(msan).State = EntityState.Modified;
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }
            ViewBag.CihazId = new SelectList(db.Database.SqlQuery<Fttx_Orm.Models.Cihaz>("select * from Cihaz where CihazId not in (select CihazId from Adrers where Durum=1) and Durum=1").ToList(), "CihazId", "CihazName", msan.CihazId);

            return View(msan);
        }

        // GET: Msans/Delete/5
        public async Task<ActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Msan msan = await db.Msans.FindAsync(id);
            if (msan == null)
            {
                return HttpNotFound();
            }
            return View(msan);
        }

        // POST: Msans/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> DeleteConfirmed(int id)
        {
            Msan msan = await db.Msans.FindAsync(id);
            db.Msans.Remove(msan);
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
