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
    public class RoleMenusController : Controller
    {
        private FttxContext db = new FttxContext();

        // GET: RoleMenus
        public async Task<ActionResult> Index()
        {
            var rolMenus = db.RolMenus.Include(r => r.AllMenu).Include(r => r.Role);
            return View(await rolMenus.ToListAsync());
        }

        // GET: RoleMenus/Details/5
        public async Task<ActionResult> Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            RoleMenu roleMenu = await db.RolMenus.FindAsync(id);
            if (roleMenu == null)
            {
                return HttpNotFound();
            }
            return View(roleMenu);
        }

        // GET: RoleMenus/Create
        public ActionResult Create()
        {
            ViewBag.MenuId = new SelectList(db.AllMenu, "MenuId", "MenuName");
            ViewBag.RoleId = new SelectList(db.Roles, "RoleId", "RoleName");
            return View();
        }

        // POST: RoleMenus/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Create(int[] MenuId, int RoleId)
        {
            List<RoleMenu> roleMenus = new List<RoleMenu>();

            if (MenuId[0]==0)
            {
                ModelState.AddModelError("MenuId", "Bir değer girin");

                return View();
            }
            if (MenuId != null && RoleId > 0)
            {


                for (int i = 0; i < MenuId.Length; i++)
                {

                    RoleMenu roleMenu = new RoleMenu();
                    roleMenu.MenuId = MenuId[i];
                    roleMenu.RoleId = RoleId;
                    db.RolMenus.Add(roleMenu);
                }
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }
            else
            {
               
            }

            ViewBag.MenuId = new SelectList(db.AllMenu, "MenuId", "MenuName", MenuId);
            ViewBag.RoleId = new SelectList(db.Roles, "RoleId", "RoleName", RoleId);
            return View();
        }

        // GET: RoleMenus/Edit/5
        public async Task<ActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            RoleMenu roleMenu = await db.RolMenus.FindAsync(id);
            if (roleMenu == null)
            {
                return HttpNotFound();
            }
            ViewBag.MenuId = new SelectList(db.AllMenu, "MenuId", "MenuName", roleMenu.MenuId);
            ViewBag.RoleId = new SelectList(db.Roles, "RoleId", "RoleName", roleMenu.RoleId);
            return View(roleMenu);
        }

        // POST: RoleMenus/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Edit([Bind(Include = "RoleMenuId,MenuId,RoleId")] RoleMenu roleMenu)
        {
            if (ModelState.IsValid)
            {
                db.Entry(roleMenu).State = EntityState.Modified;
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }
            ViewBag.MenuId = new SelectList(db.AllMenu, "MenuId", "MenuName", roleMenu.MenuId);
            ViewBag.RoleId = new SelectList(db.Roles, "RoleId", "RoleName", roleMenu.RoleId);
            return View(roleMenu);
        }

        // GET: RoleMenus/Delete/5
        public async Task<ActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            RoleMenu roleMenu = await db.RolMenus.FindAsync(id);
            if (roleMenu == null)
            {
                return HttpNotFound();
            }
            return View(roleMenu);
        }

        // POST: RoleMenus/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> DeleteConfirmed(int id)
        {
            RoleMenu roleMenu = await db.RolMenus.FindAsync(id);
            db.RolMenus.Remove(roleMenu);
            await db.SaveChangesAsync();
            return RedirectToAction("Index");
        }

        public JsonResult getData(int id)
        {
            SelectList a = new SelectList(db.Database.SqlQuery<Fttx_Orm.Models.AllMenu>("Select * from AllMenu Where MenuId not in (select MenuId from RoleMenu Where RoleId =" + id+")").ToList(), "MenuName", "MenuId");
            

            return Json(a, JsonRequestBehavior.AllowGet);
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
