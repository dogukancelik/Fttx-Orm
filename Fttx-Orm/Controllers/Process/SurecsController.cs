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
    public class SurecsController : Controller
    {
        private FttxContext db = new FttxContext();

        // GET: Surecs
        public async Task<ActionResult> Index()
        {
            return View(await db.Surecs.ToListAsync());
        }

        // GET: Surecs/Details/5
        public async Task<ActionResult> Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Surec surec = await db.Surecs.FindAsync(id);
            if (surec == null)
            {
                return HttpNotFound();
            }
            return View(surec);
        }

        // GET: Surecs/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Surecs/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Create([Bind(Include = "SurecId,SurecAdi")] Surec surec)
        {
            if (ModelState.IsValid)
            {
                db.Surecs.Add(surec);
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }

            return View(surec);
        }

        // GET: Surecs/Edit/5
        public async Task<ActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Surec surec = await db.Surecs.FindAsync(id);
            if (surec == null)
            {
                return HttpNotFound();
            }
            return View(surec);
        }

        // POST: Surecs/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Edit([Bind(Include = "SurecId,SurecAdi")] Surec surec)
        {
            if (ModelState.IsValid)
            {
                db.Entry(surec).State = EntityState.Modified;
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }
            return View(surec);
        }

        // GET: Surecs/Delete/5
        public async Task<ActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Surec surec = await db.Surecs.FindAsync(id);
            if (surec == null)
            {
                return HttpNotFound();
            }
            return View(surec);
        }

        // POST: Surecs/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> DeleteConfirmed(int id)
        {
            Surec surec = await db.Surecs.FindAsync(id);
            db.Surecs.Remove(surec);
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
