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
    public class FiberNodeBaglantisController : Controller
    {
        private FttxContext db = new FttxContext();

        // GET: FiberNodeBaglantis
        public async Task<ActionResult> Index()
        {
            return View(await db.FiberNodeBaglantis.ToListAsync());
        }

        // GET: FiberNodeBaglantis/Details/5
        public async Task<ActionResult> Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            FiberNodeBaglanti fiberNodeBaglanti = await db.FiberNodeBaglantis.FindAsync(id);
            if (fiberNodeBaglanti == null)
            {
                return HttpNotFound();
            }
            return View(fiberNodeBaglanti);
        }

        // GET: FiberNodeBaglantis/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: FiberNodeBaglantis/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Create([Bind(Include = "FiberNodeBaglantiId,BaglantiId,BaglantiNode,GirisDevre,BaglantiGirisNode,BaglantiGirisNodeDevre")] FiberNodeBaglanti fiberNodeBaglanti)
        {
            if (ModelState.IsValid)
            {
                db.FiberNodeBaglantis.Add(fiberNodeBaglanti);
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }

            return View(fiberNodeBaglanti);
        }

        // GET: FiberNodeBaglantis/Edit/5
        public async Task<ActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            FiberNodeBaglanti fiberNodeBaglanti = await db.FiberNodeBaglantis.FindAsync(id);
            if (fiberNodeBaglanti == null)
            {
                return HttpNotFound();
            }
            return View(fiberNodeBaglanti);
        }

        // POST: FiberNodeBaglantis/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Edit([Bind(Include = "FiberNodeBaglantiId,BaglantiId,BaglantiNode,GirisDevre,BaglantiGirisNode,BaglantiGirisNodeDevre")] FiberNodeBaglanti fiberNodeBaglanti)
        {
            if (ModelState.IsValid)
            {
                db.Entry(fiberNodeBaglanti).State = EntityState.Modified;
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }
            return View(fiberNodeBaglanti);
        }

        // GET: FiberNodeBaglantis/Delete/5
        public async Task<ActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            FiberNodeBaglanti fiberNodeBaglanti = await db.FiberNodeBaglantis.FindAsync(id);
            if (fiberNodeBaglanti == null)
            {
                return HttpNotFound();
            }
            return View(fiberNodeBaglanti);
        }

        // POST: FiberNodeBaglantis/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> DeleteConfirmed(int id)
        {
            FiberNodeBaglanti fiberNodeBaglanti = await db.FiberNodeBaglantis.FindAsync(id);
            db.FiberNodeBaglantis.Remove(fiberNodeBaglanti);
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
