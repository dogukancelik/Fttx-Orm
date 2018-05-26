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
    public class ProfilsController : Controller
    {
        private FttxContext db = new FttxContext();

        // GET: Profils
        public async Task<ActionResult> Index()
        {
            var profils = db.Profils.Include(p => p.kullanici);
            return View(await profils.ToListAsync());
        }

        // GET: Profils/Details/5
        public async Task<ActionResult> Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Profil profil = await db.Profils.FindAsync(id);
            if (profil == null)
            {
                return HttpNotFound();
            }
            return View(profil);
        }

        // GET: Profils/Create
        public ActionResult Create()
        {
            ViewBag.UserId = new SelectList(db.Kullanicilar, "UserId", "UserName");
            return View();
        }

        // POST: Profils/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Create([Bind(Include = "ProfilId,UserId,Adi,Soyadi,Email,Tel")] Profil profil)
        {
            if (ModelState.IsValid)
            {
                db.Profils.Add(profil);
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }

            ViewBag.UserId = new SelectList(db.Kullanicilar, "UserId", "UserName", profil.UserId);
            return View(profil);
        }

        // GET: Profils/Edit/5
        public async Task<ActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Profil profil = await db.Profils.FindAsync(id);
            if (profil == null)
            {
                return HttpNotFound();
            }
            ViewBag.UserId = new SelectList(db.Kullanicilar, "UserId", "UserName", profil.UserId);
            return View(profil);
        }

        // POST: Profils/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Edit([Bind(Include = "ProfilId,UserId,Adi,Soyadi,Email,Tel")] Profil profil)
        {
            if (ModelState.IsValid)
            {
                db.Entry(profil).State = EntityState.Modified;
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }
            ViewBag.UserId = new SelectList(db.Kullanicilar, "UserId", "UserName", profil.UserId);
            return View(profil);
        }

        // GET: Profils/Delete/5
        public async Task<ActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Profil profil = await db.Profils.FindAsync(id);
            if (profil == null)
            {
                return HttpNotFound();
            }
            return View(profil);
        }

        // POST: Profils/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> DeleteConfirmed(int id)
        {
            Profil profil = await db.Profils.FindAsync(id);
            db.Profils.Remove(profil);
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
