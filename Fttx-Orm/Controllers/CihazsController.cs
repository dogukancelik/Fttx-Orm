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
    public class CihazsController : BaseController
    {
        private FttxContext db = new FttxContext();

        // GET: Cihazs
        public async Task<ActionResult> Index()
        {
            var cihazlar = db.Cihazlar.Include(c => c.CihazMarka).Include(c => c.CihazTips).Include(c => c.Proje);
            return View(await cihazlar.ToListAsync());
        }

        // GET: Cihazs/Details/5
        public async Task<ActionResult> Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Cihaz cihaz = await db.Cihazlar.FindAsync(id);
            if (cihaz == null)
            {
                return HttpNotFound();
            }
            return View(cihaz);
        }

        // GET: Cihazs/Create
        public ActionResult Create()
        {
            ViewBag.CihazMarkaId = new SelectList(db.CihazMarkalar, "CihazMarkaId", "MarkaAdi");
            ViewBag.CihazTipsId = new SelectList(db.CihazTipler, "CihazTipsId", "CihazTip");
            ViewBag.ProjeId = new SelectList(db.Projes, "ProjeId", "ProjeNo");
            return View();
        }

        // POST: Cihazs/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Create([Bind(Include = "CihazId,CihazName,CihazTipsId,ProjeId,CihazMarkaId,Durum")] Cihaz cihaz)
        {
            if (ModelState.IsValid)
            {
                db.Cihazlar.Add(cihaz);
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }

            ViewBag.CihazMarkaId = new SelectList(db.CihazMarkalar, "CihazMarkaId", "MarkaAdi", cihaz.CihazMarkaId);
            ViewBag.CihazTipsId = new SelectList(db.CihazTipler, "CihazTipsId", "CihazTip", cihaz.CihazTipsId);
            ViewBag.ProjeId = new SelectList(db.Projes, "ProjeId", "ProjeNo", cihaz.ProjeId);
            return View(cihaz);
        }

        // GET: Cihazs/Edit/5
        public async Task<ActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Cihaz cihaz = await db.Cihazlar.FindAsync(id);
            if (cihaz == null)
            {
                return HttpNotFound();
            }
            ViewBag.CihazMarkaId = new SelectList(db.CihazMarkalar, "CihazMarkaId", "MarkaAdi", cihaz.CihazMarkaId);
            ViewBag.CihazTipsId = new SelectList(db.CihazTipler, "CihazTipsId", "CihazTip", cihaz.CihazTipsId);
            ViewBag.ProjeId = new SelectList(db.Projes, "ProjeId", "ProjeNo", cihaz.ProjeId);
            return View(cihaz);
        }

        // POST: Cihazs/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Edit([Bind(Include = "CihazId,CihazName,CihazTipsId,ProjeId,CihazMarkaId,Durum")] Cihaz cihaz)
        {
            if (ModelState.IsValid)
            {
                db.Entry(cihaz).State = EntityState.Modified;
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }
            ViewBag.CihazMarkaId = new SelectList(db.CihazMarkalar, "CihazMarkaId", "MarkaAdi", cihaz.CihazMarkaId);
            ViewBag.CihazTipsId = new SelectList(db.CihazTipler, "CihazTipsId", "CihazTip", cihaz.CihazTipsId);
            ViewBag.ProjeId = new SelectList(db.Projes, "ProjeId", "ProjeNo", cihaz.ProjeId);
            return View(cihaz);
        }

        // GET: Cihazs/Delete/5
        public async Task<ActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Cihaz cihaz = await db.Cihazlar.FindAsync(id);
            if (cihaz == null)
            {
                return HttpNotFound();
            }
            return View(cihaz);
        }

        // POST: Cihazs/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> DeleteConfirmed(int id)
        {
            Cihaz cihaz = await db.Cihazlar.FindAsync(id);
            db.Cihazlar.Remove(cihaz);
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
