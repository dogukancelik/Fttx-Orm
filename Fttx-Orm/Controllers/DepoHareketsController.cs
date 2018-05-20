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
    public class DepoHareketsController : BaseController
    {
        private FttxContext db = new FttxContext();

        // GET: DepoHarekets
        public async Task<ActionResult> Index()
        {
            return View(await db.DepoHarekets.ToListAsync());
        }

        // GET: DepoHarekets/Details/5
        public async Task<ActionResult> Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            DepoHareket depoHareket = await db.DepoHarekets.FindAsync(id);
            if (depoHareket == null)
            {
                return HttpNotFound();
            }
            return View(depoHareket);
        }

        // GET: DepoHarekets/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: DepoHarekets/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Create([Bind(Include = "DepoHareketId,CihazID,DegpoGelis,DepoGidis,GelisTarihi,CikisTarihi,ProjeID,Durum")] DepoHareket depoHareket)
        {
            if (ModelState.IsValid)
            {
                db.DepoHarekets.Add(depoHareket);
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }

            return View(depoHareket);
        }

        // GET: DepoHarekets/Edit/5
        public async Task<ActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            DepoHareket depoHareket = await db.DepoHarekets.FindAsync(id);
            if (depoHareket == null)
            {
                return HttpNotFound();
            }
            return View(depoHareket);
        }

        // POST: DepoHarekets/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Edit([Bind(Include = "DepoHareketId,CihazID,DegpoGelis,DepoGidis,GelisTarihi,CikisTarihi,ProjeID,Durum")] DepoHareket depoHareket)
        {
            if (ModelState.IsValid)
            {
                db.Entry(depoHareket).State = EntityState.Modified;
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }
            return View(depoHareket);
        }

        // GET: DepoHarekets/Delete/5
        public async Task<ActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            DepoHareket depoHareket = await db.DepoHarekets.FindAsync(id);
            if (depoHareket == null)
            {
                return HttpNotFound();
            }
            return View(depoHareket);
        }

        // POST: DepoHarekets/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> DeleteConfirmed(int id)
        {
            DepoHareket depoHareket = await db.DepoHarekets.FindAsync(id);
            db.DepoHarekets.Remove(depoHareket);
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
