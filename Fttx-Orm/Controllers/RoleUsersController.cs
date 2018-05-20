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
    public class RoleUsersController : BaseController
    {
        private FttxContext db = new FttxContext();

        // GET: RoleUsers
        public async Task<ActionResult> Index()
        {
            var rolUsers = db.RolUsers.Include(r => r.Role);
            return View(await rolUsers.ToListAsync());
        }

        // GET: RoleUsers/Details/5
        public async Task<ActionResult> Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            RoleUser roleUser = await db.RolUsers.FindAsync(id);
            if (roleUser == null)
            {
                return HttpNotFound();
            }
            return View(roleUser);
        }

        // GET: RoleUsers/Create
        public ActionResult Create()
        {
            ViewBag.RoleId = new SelectList(db.Roles, "RoleId", "RoleName");
            ViewBag.UserId = new SelectList(db.Kullanicilar, "UserId", "UserName");
            return View();
        }

        // POST: RoleUsers/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Create([Bind(Include = "RoleUserId,UserId,RoleId")] RoleUser roleUser)
        {
            if (ModelState.IsValid)
            {
                db.RolUsers.Add(roleUser);
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }

            ViewBag.RoleId = new SelectList(db.Roles, "RoleId", "RoleName", roleUser.RoleId);
            ViewBag.UserId = new SelectList(db.Kullanicilar, "UserId", "UserName");
            return View(roleUser);
        }

        // GET: RoleUsers/Edit/5
        public async Task<ActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            RoleUser roleUser = await db.RolUsers.FindAsync(id);
            if (roleUser == null)
            {
                return HttpNotFound();
            }
            ViewBag.RoleId = new SelectList(db.Roles, "RoleId", "RoleName", roleUser.RoleId);
            return View(roleUser);
        }

        // POST: RoleUsers/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Edit([Bind(Include = "RoleUserId,KullaniciId,RoleId")] RoleUser roleUser)
        {
            if (ModelState.IsValid)
            {
                db.Entry(roleUser).State = EntityState.Modified;
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }
            ViewBag.RoleId = new SelectList(db.Roles, "RoleId", "RoleName", roleUser.RoleId);
            return View(roleUser);
        }

        // GET: RoleUsers/Delete/5
        public async Task<ActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            RoleUser roleUser = await db.RolUsers.FindAsync(id);
            if (roleUser == null)
            {
                return HttpNotFound();
            }
            return View(roleUser);
        }

        // POST: RoleUsers/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> DeleteConfirmed(int id)
        {
            RoleUser roleUser = await db.RolUsers.FindAsync(id);
            db.RolUsers.Remove(roleUser);
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
