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
    public class CatisController : Controller
    {
        private FttxContext db = new FttxContext();

        // GET: Catis
        public async Task<ActionResult> Index()
        {
            var catis = db.Catis.Include(c => c.Santral);
            return View(await catis.ToListAsync());
        }

        // GET: Catis/Details/5
        public async Task<ActionResult> Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Cati cati = await db.Catis.FindAsync(id);
            if (cati == null)
            {
                return HttpNotFound();
            }
            return View(cati);
        }

        // GET: Catis/Create
        public ActionResult Create()
        {
            ViewBag.SantralId = new SelectList(db.Santraller, "SantralId", "SantralAdi");
            return View();
        }

        // POST: Catis/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Create([Bind(Include = "CatiId,SantralId,CatiAdi,Durum")] Cati cati)
        {
            if (ModelState.IsValid)
            {
                db.Catis.Add(cati);
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }

            ViewBag.SantralId = new SelectList(db.Santraller, "SantralId", "SantralAdi", cati.SantralId);
            return View(cati);
        }

        // GET: Catis/Edit/5
        public async Task<ActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Cati cati = await db.Catis.FindAsync(id);
            if (cati == null)
            {
                return HttpNotFound();
            }
            ViewBag.SantralId = new SelectList(db.Santraller, "SantralId", "SantralAdi", cati.SantralId);
            return View(cati);
        }

        // POST: Catis/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Edit([Bind(Include = "CatiId,SantralId,CatiAdi,Durum")] Cati cati)
        {
            if (ModelState.IsValid)
            {
                db.Entry(cati).State = EntityState.Modified;
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }
            ViewBag.SantralId = new SelectList(db.Santraller, "SantralId", "SantralAdi", cati.SantralId);
            return View(cati);
        }

        // GET: Catis/Delete/5
        public async Task<ActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Cati cati = await db.Catis.FindAsync(id);
            if (cati == null)
            {
                return HttpNotFound();
            }
            return View(cati);
        }

        // POST: Catis/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> DeleteConfirmed(int id)
        {
            Cati cati = await db.Catis.FindAsync(id);
            db.Catis.Remove(cati);
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
