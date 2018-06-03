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
    public class RoleSurecsController : Controller
    {
        private FttxContext db = new FttxContext();

        // GET: RoleSurecs
        public async Task<ActionResult> Index()
        {
            return View(await db.RoleSurecs.ToListAsync());
        }

        // GET: RoleSurecs/Details/5
        public async Task<ActionResult> Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            RoleSurec roleSurec = await db.RoleSurecs.FindAsync(id);
            if (roleSurec == null)
            {
                return HttpNotFound();
            }
            return View(roleSurec);
        }

        // GET: RoleSurecs/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: RoleSurecs/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Create([Bind(Include = "RoleSurecId,RoleId,SurecId,IsId")] RoleSurec roleSurec)
        {
            if (ModelState.IsValid)
            {
                db.RoleSurecs.Add(roleSurec);
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }

            return View(roleSurec);
        }

        // GET: RoleSurecs/Edit/5
        public async Task<ActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            RoleSurec roleSurec = await db.RoleSurecs.FindAsync(id);
            if (roleSurec == null)
            {
                return HttpNotFound();
            }
            return View(roleSurec);
        }

        // POST: RoleSurecs/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Edit([Bind(Include = "RoleSurecId,RoleId,SurecId,IsId")] RoleSurec roleSurec)
        {
            if (ModelState.IsValid)
            {
                db.Entry(roleSurec).State = EntityState.Modified;
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }
            return View(roleSurec);
        }

        // GET: RoleSurecs/Delete/5
        public async Task<ActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            RoleSurec roleSurec = await db.RoleSurecs.FindAsync(id);
            if (roleSurec == null)
            {
                return HttpNotFound();
            }
            return View(roleSurec);
        }

        // POST: RoleSurecs/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> DeleteConfirmed(int id)
        {
            RoleSurec roleSurec = await db.RoleSurecs.FindAsync(id);
            db.RoleSurecs.Remove(roleSurec);
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
