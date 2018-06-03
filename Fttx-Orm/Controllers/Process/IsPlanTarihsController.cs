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
using Fttx_Orm.Models.Process;

namespace Fttx_Orm.Controllers.Process
{
    public class IsPlanTarihsController : Controller
    {
        private FttxContext db = new FttxContext();

        // GET: IsPlanTarihs
        public async Task<ActionResult> Index()
        {
            return View(await db.IsPlanTarihs.ToListAsync());
        }

        // GET: IsPlanTarihs/Details/5
        public async Task<ActionResult> Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            IsPlanTarih isPlanTarih = await db.IsPlanTarihs.FindAsync(id);
            if (isPlanTarih == null)
            {
                return HttpNotFound();
            }
            return View(isPlanTarih);
        }

        // GET: IsPlanTarihs/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: IsPlanTarihs/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Create([Bind(Include = "IsPlanTarihId,IsId,BaslangicTarih,BitisTarih,SurecId")] IsPlanTarih isPlanTarih)
        {
            if (ModelState.IsValid)
            {
                db.IsPlanTarihs.Add(isPlanTarih);
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }

            return View(isPlanTarih);
        }

        // GET: IsPlanTarihs/Edit/5
        public async Task<ActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            IsPlanTarih isPlanTarih = await db.IsPlanTarihs.FindAsync(id);
            if (isPlanTarih == null)
            {
                return HttpNotFound();
            }
            return View(isPlanTarih);
        }

        // POST: IsPlanTarihs/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Edit([Bind(Include = "IsPlanTarihId,IsId,BaslangicTarih,BitisTarih,SurecId")] IsPlanTarih isPlanTarih)
        {
            if (ModelState.IsValid)
            {
                db.Entry(isPlanTarih).State = EntityState.Modified;
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }
            return View(isPlanTarih);
        }

        // GET: IsPlanTarihs/Delete/5
        public async Task<ActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            IsPlanTarih isPlanTarih = await db.IsPlanTarihs.FindAsync(id);
            if (isPlanTarih == null)
            {
                return HttpNotFound();
            }
            return View(isPlanTarih);
        }

        // POST: IsPlanTarihs/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> DeleteConfirmed(int id)
        {
            IsPlanTarih isPlanTarih = await db.IsPlanTarihs.FindAsync(id);
            db.IsPlanTarihs.Remove(isPlanTarih);
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
