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
    public class SurecSirasController : Controller
    {
        private FttxContext db = new FttxContext();

        // GET: SurecSiras
        public async Task<ActionResult> Index()
        {
            return View(await db.SurecSiras.ToListAsync());
        }

        // GET: SurecSiras/Details/5
        public async Task<ActionResult> Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            SurecSira surecSira = await db.SurecSiras.FindAsync(id);
            if (surecSira == null)
            {
                return HttpNotFound();
            }
            return View(surecSira);
        }

        // GET: SurecSiras/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: SurecSiras/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Create([Bind(Include = "SurecSiraId,ProjeId,SurecId,Sira,Durum")] SurecSira surecSira)
        {
            if (ModelState.IsValid)
            {
                db.SurecSiras.Add(surecSira);
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }

            return View(surecSira);
        }

        // GET: SurecSiras/Edit/5
        public async Task<ActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            SurecSira surecSira = await db.SurecSiras.FindAsync(id);
            if (surecSira == null)
            {
                return HttpNotFound();
            }
            return View(surecSira);
        }

        // POST: SurecSiras/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Edit([Bind(Include = "SurecSiraId,ProjeId,SurecId,Sira,Durum")] SurecSira surecSira)
        {
            if (ModelState.IsValid)
            {
                db.Entry(surecSira).State = EntityState.Modified;
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }
            return View(surecSira);
        }

        // GET: SurecSiras/Delete/5
        public async Task<ActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            SurecSira surecSira = await db.SurecSiras.FindAsync(id);
            if (surecSira == null)
            {
                return HttpNotFound();
            }
            return View(surecSira);
        }

        // POST: SurecSiras/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> DeleteConfirmed(int id)
        {
            SurecSira surecSira = await db.SurecSiras.FindAsync(id);
            db.SurecSiras.Remove(surecSira);
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
