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
    public class CihazTipsController : BaseController
    {
        private FttxContext db = new FttxContext();

        // GET: CihazTips
        public async Task<ActionResult> Index()
        {
            return View(await db.CihazTipler.ToListAsync());
        }

        // GET: CihazTips/Details/5
        public async Task<ActionResult> Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            CihazTips cihazTips = await db.CihazTipler.FindAsync(id);
            if (cihazTips == null)
            {
                return HttpNotFound();
            }
            return View(cihazTips);
        }

        // GET: CihazTips/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: CihazTips/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Create([Bind(Include = "CihazTipsId,CihazTip,Durum")] CihazTips cihazTips)
        {
            if (ModelState.IsValid)
            {
                db.CihazTipler.Add(cihazTips);
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }

            return View(cihazTips);
        }

        // GET: CihazTips/Edit/5
        public async Task<ActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            CihazTips cihazTips = await db.CihazTipler.FindAsync(id);
            if (cihazTips == null)
            {
                return HttpNotFound();
            }
            return View(cihazTips);
        }

        // POST: CihazTips/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Edit([Bind(Include = "CihazTipsId,CihazTip,Durum")] CihazTips cihazTips)
        {
            if (ModelState.IsValid)
            {
                db.Entry(cihazTips).State = EntityState.Modified;
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }
            return View(cihazTips);
        }

        // GET: CihazTips/Delete/5
        public async Task<ActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            CihazTips cihazTips = await db.CihazTipler.FindAsync(id);
            if (cihazTips == null)
            {
                return HttpNotFound();
            }
            return View(cihazTips);
        }

        // POST: CihazTips/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> DeleteConfirmed(int id)
        {
            CihazTips cihazTips = await db.CihazTipler.FindAsync(id);
            db.CihazTipler.Remove(cihazTips);
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
