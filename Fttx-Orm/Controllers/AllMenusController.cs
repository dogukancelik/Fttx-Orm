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
    public class AllMenusController : BaseController
    {
        private FttxContext db = new FttxContext();
         
        // GET: AllMenus
        public async Task<ActionResult> Index()
        {
            return View(await db.AllMenu.ToListAsync());
        }

        // GET: AllMenus/Details/5
        public async Task<ActionResult> Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            AllMenu allMenu = await db.AllMenu.FindAsync(id);
            if (allMenu == null)
            {
                return HttpNotFound();
            }
            return View(allMenu);
        }

        // GET: AllMenus/Create
        public ActionResult Create()
        {
            ViewBag.SubMenuId = new SelectList(db.Database.SqlQuery<Fttx_Orm.Models.AllMenu>("Select * from AllMenu where SubMenuId=0").ToList(), "MenuId", "MenuName");
            ViewBag.MenuName = new SelectList(db.Database.SqlQuery<Fttx_Orm.Models.AllMenu>("Select * from AllMenu where SubMenuId!=0").ToList(), "MenuId", "MenuName");
            ViewBag.ControlerName = BLL.GetControllerNames();
            return View();
        }

        // POST: AllMenus/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Create([Bind(Include = "MenuId,SubMenuId,MenuName,ControlerName,ActionName")] AllMenu allMenu)
        {
            if (ModelState.IsValid)
            {
                int a = db.AllMenu.Where(p => p.ControlerName == allMenu.ControlerName).Where(c => c.ActionName == allMenu.ActionName).Count();
                //db.Database.SqlQuery<Fttx_Orm.Models.AllMenu>("Select ActionName from AllMenu where ControlerName=@ControlerName and ActionName=@ActionName", new { allMenu.ControlerName, allMenu.ActionName }).ToString();
                if (a == 0)
                {
                    db.AllMenu.Add(allMenu);
                    await db.SaveChangesAsync();
                    return RedirectToAction("Index");
                }
                else
                {
                    return RedirectToAction("Create");
                }
            }
            ViewBag.SubMenuId = new SelectList(db.Database.SqlQuery<Fttx_Orm.Models.AllMenu>("Select * from AllMenu where SubMenuId=0").ToList(), "MenuId", "MenuName",allMenu.MenuId);
            ViewBag.MenuName = new SelectList(db.Database.SqlQuery<Fttx_Orm.Models.AllMenu>("Select * from AllMenu where SubMenuId!=0").ToList(), "MenuId", "MenuName",allMenu.MenuId);
            ViewBag.ControlerName = BLL.GetControllerNames();
            return View(allMenu);
        }

        // GET: AllMenus/Edit/5
        public async Task<ActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            AllMenu allMenu = await db.AllMenu.FindAsync(id);
            if (allMenu == null)
            {
                return HttpNotFound();
            }
            return View(allMenu);
        }

        // POST: AllMenus/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Edit([Bind(Include = "MenuId,SubMenuId,MenuName,ControlerName,ActionName")] AllMenu allMenu)
        {
            if (ModelState.IsValid)
            {
                db.Entry(allMenu).State = EntityState.Modified;
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }
            return View(allMenu);
        }

        // GET: AllMenus/Delete/5
        public async Task<ActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            AllMenu allMenu = await db.AllMenu.FindAsync(id);
            if (allMenu == null)
            {
                return HttpNotFound();
            }
            return View(allMenu);
        }

        // POST: AllMenus/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> DeleteConfirmed(int id)
        {
            AllMenu allMenu = await db.AllMenu.FindAsync(id);
            db.AllMenu.Remove(allMenu);
            await db.SaveChangesAsync();
            return RedirectToAction("Index");
        }

        public  ActionResult MenuGetir()
        {
            return PartialView();
        }
        public JsonResult getActions()    //error if try to access using Url
        {
            SelectList a = new SelectList(db.Database.SqlQuery<Fttx_Orm.Models.AllMenu>("Select * from AllMenu").ToList(), "ActionName", "ControlerName");
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
