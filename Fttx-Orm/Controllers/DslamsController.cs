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
    public class DslamsController : BaseController
    {
        private FttxContext db = new FttxContext();

        // GET: Dslams
        public async Task<ActionResult> Index()
        {
            var dslams = db.Dslams.Include(d => d.Cihaz);
            return View(await dslams.ToListAsync());
        }

        // GET: Dslams/Details/5
        public async Task<ActionResult> Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Dslam dslam = await db.Dslams.FindAsync(id);
            if (dslam == null)
            {
                return HttpNotFound();
            }
            return View(dslam);
        }

        // GET: Dslams/Create
        public ActionResult Create()
        {
            ViewBag.CihazId = new SelectList(db.Database.SqlQuery<Fttx_Orm.Models.Cihaz>("select * from Cihaz where CihazId not in (select CihazId from Dslam where Durum=1)").ToList(), "CihazId", "CihazName");
            return View();
        }

        // POST: Dslams/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Create([Bind(Include = "DslamId,CihazId,DslamAdi,DslamIp,Durum")] Dslam dslam)
        {
            if (ModelState.IsValid)
            {
                db.Dslams.Add(dslam);
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }
            ViewBag.CihazId = new SelectList(db.Database.SqlQuery<Fttx_Orm.Models.Cihaz>("select * from Cihaz where CihazId not in (select CihazId from Dslam where Durum=1)").ToList(), "CihazId", "CihazName", dslam.CihazId);

     
            return View(dslam);
        }

        // GET: Dslams/Edit/5
        public async Task<ActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Dslam dslam = await db.Dslams.FindAsync(id);
            if (dslam == null)
            {
                return HttpNotFound();
            }
            ViewBag.CihazId = new SelectList(db.Database.SqlQuery<Fttx_Orm.Models.Cihaz>("select * from Cihaz where CihazId not in (select CihazId from Dslam where Durum=1)").ToList(), "CihazId", "CihazName", dslam.CihazId);

            return View(dslam);
        }

        // POST: Dslams/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Edit([Bind(Include = "DslamId,CihazId,DslamAdi,DslamIp,Durum")] Dslam dslam)
        {
            if (ModelState.IsValid)
            {
                db.Entry(dslam).State = EntityState.Modified;
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }
            ViewBag.CihazId = new SelectList(db.Database.SqlQuery<Fttx_Orm.Models.Cihaz>("select * from Cihaz where CihazId not in (select CihazId from Dslam where Durum=1)").ToList(), "CihazId", "CihazName", dslam.CihazId);

            return View(dslam);
        }

        // GET: Dslams/Delete/5
        public async Task<ActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Dslam dslam = await db.Dslams.FindAsync(id);
            if (dslam == null)
            {
                return HttpNotFound();
            }
            return View(dslam);
        }

        // POST: Dslams/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> DeleteConfirmed(int id)
        {
            Dslam dslam = await db.Dslams.FindAsync(id);
            db.Dslams.Remove(dslam);
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
