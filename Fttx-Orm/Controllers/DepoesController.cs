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
    public class DepoesController : BaseController
    {
        private FttxContext db = new FttxContext();

        // GET: Depoes
        public async Task<ActionResult> Index()
        {
            return View(await db.Depoes.ToListAsync());
        }

        // GET: Depoes/Details/5
        public async Task<ActionResult> Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Depo depo = await db.Depoes.FindAsync(id);
            if (depo == null)
            {
                return HttpNotFound();
            }
            return View(depo);
        }

        // GET: Depoes/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Depoes/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Create([Bind(Include = "DepoId,DepoAdi,Durum")] Depo depo)
        {
            if (ModelState.IsValid)
            {
                db.Depoes.Add(depo);
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }

            return View(depo);
        }

        // GET: Depoes/Edit/5
        public async Task<ActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Depo depo = await db.Depoes.FindAsync(id);
            if (depo == null)
            {
                return HttpNotFound();
            }
            return View(depo);
        }

        // POST: Depoes/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Edit([Bind(Include = "DepoId,DepoAdi,Durum")] Depo depo)
        {
            if (ModelState.IsValid)
            {
                db.Entry(depo).State = EntityState.Modified;
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }
            return View(depo);
        }

        // GET: Depoes/Delete/5
        public async Task<ActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Depo depo = await db.Depoes.FindAsync(id);
            if (depo == null)
            {
                return HttpNotFound();
            }
            return View(depo);
        }

        // POST: Depoes/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> DeleteConfirmed(int id)
        {
            Depo depo = await db.Depoes.FindAsync(id);
            db.Depoes.Remove(depo);
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
