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
    public class BaglantiTipsController : Controller
    {
        private FttxContext db = new FttxContext();

        // GET: BaglantiTips
        public async Task<ActionResult> Index()
        {
            return View(await db.BaglantiTips.ToListAsync());
        }

        // GET: BaglantiTips/Details/5
        public async Task<ActionResult> Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            BaglantiTip baglantiTip = await db.BaglantiTips.FindAsync(id);
            if (baglantiTip == null)
            {
                return HttpNotFound();
            }
            return View(baglantiTip);
        }

        // GET: BaglantiTips/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: BaglantiTips/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Create([Bind(Include = "BaglantiTipId,BaglantiTipAdi,Durum,Aciklama")] BaglantiTip baglantiTip)
        {
            if (ModelState.IsValid)
            {
                db.BaglantiTips.Add(baglantiTip);
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }

            return View(baglantiTip);
        }

        // GET: BaglantiTips/Edit/5
        public async Task<ActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            BaglantiTip baglantiTip = await db.BaglantiTips.FindAsync(id);
            if (baglantiTip == null)
            {
                return HttpNotFound();
            }
            return View(baglantiTip);
        }

        // POST: BaglantiTips/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Edit([Bind(Include = "BaglantiTipId,BaglantiTipAdi,Durum,Aciklama")] BaglantiTip baglantiTip)
        {
            if (ModelState.IsValid)
            {
                db.Entry(baglantiTip).State = EntityState.Modified;
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }
            return View(baglantiTip);
        }

        // GET: BaglantiTips/Delete/5
        public async Task<ActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            BaglantiTip baglantiTip = await db.BaglantiTips.FindAsync(id);
            if (baglantiTip == null)
            {
                return HttpNotFound();
            }
            return View(baglantiTip);
        }

        // POST: BaglantiTips/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> DeleteConfirmed(int id)
        {
            BaglantiTip baglantiTip = await db.BaglantiTips.FindAsync(id);
            db.BaglantiTips.Remove(baglantiTip);
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
