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
    public class IsesController : Controller
    {
        private FttxContext db = new FttxContext();

        // GET: Ises
        public async Task<ActionResult> Index()
        {
            return View(await db.Iss.ToListAsync());
        }

        // GET: Ises/Details/5
        public async Task<ActionResult> Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Is @is = await db.Iss.FindAsync(id);
            if (@is == null)
            {
                return HttpNotFound();
            }
            return View(@is);
        }

        // GET: Ises/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Ises/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Create([Bind(Include = "Id,Name,TurId,Aciklama")] Is @is)
        {
            if (ModelState.IsValid)
            {
                db.Iss.Add(@is);
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }

            return View(@is);
        }

        // GET: Ises/Edit/5
        public async Task<ActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Is @is = await db.Iss.FindAsync(id);
            if (@is == null)
            {
                return HttpNotFound();
            }
            return View(@is);
        }

        // POST: Ises/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Edit([Bind(Include = "Id,Name,TurId,Aciklama")] Is @is)
        {
            if (ModelState.IsValid)
            {
                db.Entry(@is).State = EntityState.Modified;
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }
            return View(@is);
        }

        // GET: Ises/Delete/5
        public async Task<ActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Is @is = await db.Iss.FindAsync(id);
            if (@is == null)
            {
                return HttpNotFound();
            }
            return View(@is);
        }

        // POST: Ises/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> DeleteConfirmed(int id)
        {
            Is @is = await db.Iss.FindAsync(id);
            db.Iss.Remove(@is);
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
