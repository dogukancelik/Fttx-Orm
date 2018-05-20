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
    public class DepoStoksController : BaseController
    {
        private FttxContext db = new FttxContext();

        // GET: DepoStoks
        public async Task<ActionResult> Index()
        {
            return View(await db.DepoStoks.ToListAsync());
        }

        // GET: DepoStoks/Details/5
        public async Task<ActionResult> Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            DepoStok depoStok = await db.DepoStoks.FindAsync(id);
            if (depoStok == null)
            {
                return HttpNotFound();
            }
            return View(depoStok);
        }

        // GET: DepoStoks/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: DepoStoks/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Create([Bind(Include = "DepoStokId,DepoId,CihazId")] DepoStok depoStok)
        {
            if (ModelState.IsValid)
            {
                db.DepoStoks.Add(depoStok);
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }

            return View(depoStok);
        }

        // GET: DepoStoks/Edit/5
        public async Task<ActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            DepoStok depoStok = await db.DepoStoks.FindAsync(id);
            if (depoStok == null)
            {
                return HttpNotFound();
            }
            return View(depoStok);
        }

        // POST: DepoStoks/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Edit([Bind(Include = "DepoStokId,DepoId,CihazId")] DepoStok depoStok)
        {
            if (ModelState.IsValid)
            {
                db.Entry(depoStok).State = EntityState.Modified;
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }
            return View(depoStok);
        }

        // GET: DepoStoks/Delete/5
        public async Task<ActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            DepoStok depoStok = await db.DepoStoks.FindAsync(id);
            if (depoStok == null)
            {
                return HttpNotFound();
            }
            return View(depoStok);
        }

        // POST: DepoStoks/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> DeleteConfirmed(int id)
        {
            DepoStok depoStok = await db.DepoStoks.FindAsync(id);
            db.DepoStoks.Remove(depoStok);
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
