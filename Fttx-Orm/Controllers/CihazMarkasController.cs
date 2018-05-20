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
    public class CihazMarkasController : BaseController
    {
        private FttxContext db = new FttxContext();

        // GET: CihazMarkas
        public async Task<ActionResult> Index()
        {
            return View(await db.CihazMarkalar.ToListAsync());
        }

        // GET: CihazMarkas/Details/5
        public async Task<ActionResult> Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            CihazMarka cihazMarka = await db.CihazMarkalar.FindAsync(id);
            if (cihazMarka == null)
            {
                return HttpNotFound();
            }
            return View(cihazMarka);
        }

        // GET: CihazMarkas/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: CihazMarkas/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Create([Bind(Include = "CihazMarkaId,MarkaAdi,Durum")] CihazMarka cihazMarka)
        {
            if (ModelState.IsValid)
            {
                db.CihazMarkalar.Add(cihazMarka);
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }

            return View(cihazMarka);
        }

        // GET: CihazMarkas/Edit/5
        public async Task<ActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            CihazMarka cihazMarka = await db.CihazMarkalar.FindAsync(id);
            if (cihazMarka == null)
            {
                return HttpNotFound();
            }
            return View(cihazMarka);
        }

        // POST: CihazMarkas/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Edit([Bind(Include = "CihazMarkaId,MarkaAdi,Durum")] CihazMarka cihazMarka)
        {
            if (ModelState.IsValid)
            {
                db.Entry(cihazMarka).State = EntityState.Modified;
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }
            return View(cihazMarka);
        }

        // GET: CihazMarkas/Delete/5
        public async Task<ActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            CihazMarka cihazMarka = await db.CihazMarkalar.FindAsync(id);
            if (cihazMarka == null)
            {
                return HttpNotFound();
            }
            return View(cihazMarka);
        }

        // POST: CihazMarkas/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> DeleteConfirmed(int id)
        {
            CihazMarka cihazMarka = await db.CihazMarkalar.FindAsync(id);
            db.CihazMarkalar.Remove(cihazMarka);
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
