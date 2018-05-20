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
    public class BaglantiKapasitesController : Controller
    {
        private FttxContext db = new FttxContext();

        // GET: BaglantiKapasites
        public async Task<ActionResult> Index()
        {
            return View(await db.BaglantiKapasites.ToListAsync());
        }

        // GET: BaglantiKapasites/Details/5
        public async Task<ActionResult> Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            BaglantiKapasite baglantiKapasite = await db.BaglantiKapasites.FindAsync(id);
            if (baglantiKapasite == null)
            {
                return HttpNotFound();
            }
            return View(baglantiKapasite);
        }

        // GET: BaglantiKapasites/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: BaglantiKapasites/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Create([Bind(Include = "BaglantiKapasiteId,BağlantiId,GirisKapasite,CikisKapasite,KullanilanDevre,BosDevre")] BaglantiKapasite baglantiKapasite)
        {
            if (ModelState.IsValid)
            {
                db.BaglantiKapasites.Add(baglantiKapasite);
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }

            return View(baglantiKapasite);
        }

        // GET: BaglantiKapasites/Edit/5
        public async Task<ActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            BaglantiKapasite baglantiKapasite = await db.BaglantiKapasites.FindAsync(id);
            if (baglantiKapasite == null)
            {
                return HttpNotFound();
            }
            return View(baglantiKapasite);
        }

        // POST: BaglantiKapasites/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Edit([Bind(Include = "BaglantiKapasiteId,BağlantiId,GirisKapasite,CikisKapasite,KullanilanDevre,BosDevre")] BaglantiKapasite baglantiKapasite)
        {
            if (ModelState.IsValid)
            {
                db.Entry(baglantiKapasite).State = EntityState.Modified;
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }
            return View(baglantiKapasite);
        }

        // GET: BaglantiKapasites/Delete/5
        public async Task<ActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            BaglantiKapasite baglantiKapasite = await db.BaglantiKapasites.FindAsync(id);
            if (baglantiKapasite == null)
            {
                return HttpNotFound();
            }
            return View(baglantiKapasite);
        }

        // POST: BaglantiKapasites/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> DeleteConfirmed(int id)
        {
            BaglantiKapasite baglantiKapasite = await db.BaglantiKapasites.FindAsync(id);
            db.BaglantiKapasites.Remove(baglantiKapasite);
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
