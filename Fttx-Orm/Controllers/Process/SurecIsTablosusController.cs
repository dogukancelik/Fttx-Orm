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
using Fttx_Orm.Models.Process;

namespace Fttx_Orm.Controllers.Process
{
    public class SurecIsTablosusController : Controller
    {
        private FttxContext db = new FttxContext();

        // GET: SurecIsTablosus
        public async Task<ActionResult> Index()
        {
            return View(await db.SurecIsTablosus.ToListAsync());
        }

        // GET: SurecIsTablosus/Details/5
        public async Task<ActionResult> Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            SurecIsTablosu surecIsTablosu = await db.SurecIsTablosus.FindAsync(id);
            if (surecIsTablosu == null)
            {
                return HttpNotFound();
            }
            return View(surecIsTablosu);
        }

        // GET: SurecIsTablosus/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: SurecIsTablosus/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Create([Bind(Include = "SurecIsTablosuId,IsId,SurecId")] SurecIsTablosu surecIsTablosu)
        {
            if (ModelState.IsValid)
            {
                db.SurecIsTablosus.Add(surecIsTablosu);
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }

            return View(surecIsTablosu);
        }

        // GET: SurecIsTablosus/Edit/5
        public async Task<ActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            SurecIsTablosu surecIsTablosu = await db.SurecIsTablosus.FindAsync(id);
            if (surecIsTablosu == null)
            {
                return HttpNotFound();
            }
            return View(surecIsTablosu);
        }

        // POST: SurecIsTablosus/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Edit([Bind(Include = "SurecIsTablosuId,IsId,SurecId")] SurecIsTablosu surecIsTablosu)
        {
            if (ModelState.IsValid)
            {
                db.Entry(surecIsTablosu).State = EntityState.Modified;
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }
            return View(surecIsTablosu);
        }

        // GET: SurecIsTablosus/Delete/5
        public async Task<ActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            SurecIsTablosu surecIsTablosu = await db.SurecIsTablosus.FindAsync(id);
            if (surecIsTablosu == null)
            {
                return HttpNotFound();
            }
            return View(surecIsTablosu);
        }

        // POST: SurecIsTablosus/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> DeleteConfirmed(int id)
        {
            SurecIsTablosu surecIsTablosu = await db.SurecIsTablosus.FindAsync(id);
            db.SurecIsTablosus.Remove(surecIsTablosu);
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
