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
    public class UcNoktasController : Controller
    {
        private FttxContext db = new FttxContext();

        // GET: UcNoktas
        public async Task<ActionResult> Index()
        {
            var ucNoktas = db.UcNoktas.Include(u => u.FiberNodeBaglanti).Include(u => u.Proje);
            return View(await ucNoktas.ToListAsync());
        }

        // GET: UcNoktas/Details/5
        public async Task<ActionResult> Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            UcNokta ucNokta = await db.UcNoktas.FindAsync(id);
            if (ucNokta == null)
            {
                return HttpNotFound();
            }
            return View(ucNokta);
        }

        // GET: UcNoktas/Create
        public ActionResult Create()
        {
            ViewBag.FiberNodeBaglantiId = new SelectList(db.FiberNodeBaglantis, "FiberNodeBaglantiId", "FiberNodeBaglantiId");
            ViewBag.ProjeId = new SelectList(db.Projes, "ProjeId", "ProjeNo");
            return View();
        }

        // POST: UcNoktas/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Create([Bind(Include = "UcNoktaId,FiberNodeBaglantiId,ProjeId,UcNoktaAdi")] UcNokta ucNokta)
        {
            if (ModelState.IsValid)
            {
                db.UcNoktas.Add(ucNokta);
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }

            ViewBag.FiberNodeBaglantiId = new SelectList(db.FiberNodeBaglantis, "FiberNodeBaglantiId", "FiberNodeBaglantiId", ucNokta.FiberNodeBaglantiId);
            ViewBag.ProjeId = new SelectList(db.Projes, "ProjeId", "ProjeNo", ucNokta.ProjeId);
            return View(ucNokta);
        }

        // GET: UcNoktas/Edit/5
        public async Task<ActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            UcNokta ucNokta = await db.UcNoktas.FindAsync(id);
            if (ucNokta == null)
            {
                return HttpNotFound();
            }
            ViewBag.FiberNodeBaglantiId = new SelectList(db.FiberNodeBaglantis, "FiberNodeBaglantiId", "FiberNodeBaglantiId", ucNokta.FiberNodeBaglantiId);
            ViewBag.ProjeId = new SelectList(db.Projes, "ProjeId", "ProjeNo", ucNokta.ProjeId);
            return View(ucNokta);
        }

        // POST: UcNoktas/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Edit([Bind(Include = "UcNoktaId,FiberNodeBaglantiId,ProjeId,UcNoktaAdi")] UcNokta ucNokta)
        {
            if (ModelState.IsValid)
            {
                db.Entry(ucNokta).State = EntityState.Modified;
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }
            ViewBag.FiberNodeBaglantiId = new SelectList(db.FiberNodeBaglantis, "FiberNodeBaglantiId", "FiberNodeBaglantiId", ucNokta.FiberNodeBaglantiId);
            ViewBag.ProjeId = new SelectList(db.Projes, "ProjeId", "ProjeNo", ucNokta.ProjeId);
            return View(ucNokta);
        }

        // GET: UcNoktas/Delete/5
        public async Task<ActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            UcNokta ucNokta = await db.UcNoktas.FindAsync(id);
            if (ucNokta == null)
            {
                return HttpNotFound();
            }
            return View(ucNokta);
        }

        // POST: UcNoktas/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> DeleteConfirmed(int id)
        {
            UcNokta ucNokta = await db.UcNoktas.FindAsync(id);
            db.UcNoktas.Remove(ucNokta);
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
