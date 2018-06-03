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
    public class IsTursController : Controller
    {
        private FttxContext db = new FttxContext();

        // GET: IsTurs
        public async Task<ActionResult> Index()
        {
            return View(await db.IsTurs.ToListAsync());
        }

        // GET: IsTurs/Details/5
        public async Task<ActionResult> Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            IsTur isTur = await db.IsTurs.FindAsync(id);
            if (isTur == null)
            {
                return HttpNotFound();
            }
            return View(isTur);
        }

        // GET: IsTurs/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: IsTurs/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Create([Bind(Include = "IsTurId,IsTuru,status")] IsTur isTur)
        {
            if (ModelState.IsValid)
            {
                db.IsTurs.Add(isTur);
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }

            return View(isTur);
        }

        // GET: IsTurs/Edit/5
        public async Task<ActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            IsTur isTur = await db.IsTurs.FindAsync(id);
            if (isTur == null)
            {
                return HttpNotFound();
            }
            return View(isTur);
        }

        // POST: IsTurs/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Edit([Bind(Include = "IsTurId,IsTuru,status")] IsTur isTur)
        {
            if (ModelState.IsValid)
            {
                db.Entry(isTur).State = EntityState.Modified;
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }
            return View(isTur);
        }

        // GET: IsTurs/Delete/5
        public async Task<ActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            IsTur isTur = await db.IsTurs.FindAsync(id);
            if (isTur == null)
            {
                return HttpNotFound();
            }
            return View(isTur);
        }

        // POST: IsTurs/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> DeleteConfirmed(int id)
        {
            IsTur isTur = await db.IsTurs.FindAsync(id);
            db.IsTurs.Remove(isTur);
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
