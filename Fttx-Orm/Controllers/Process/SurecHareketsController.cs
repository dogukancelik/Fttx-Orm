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
    public class SurecHareketsController : Controller
    {
        private FttxContext db = new FttxContext();

        // GET: SurecHarekets
        public async Task<ActionResult> Index()
        {
            return View(await db.SurecHarekets.ToListAsync());
        }

        // GET: SurecHarekets/Details/5
        public async Task<ActionResult> Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            SurecHareket surecHareket = await db.SurecHarekets.FindAsync(id);
            if (surecHareket == null)
            {
                return HttpNotFound();
            }
            return View(surecHareket);
        }

        // GET: SurecHarekets/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: SurecHarekets/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Create([Bind(Include = "SurecHareketId,ProjeId,GelisTarih,GidisTarih,UserId")] SurecHareket surecHareket)
        {
            if (ModelState.IsValid)
            {
                db.SurecHarekets.Add(surecHareket);
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }

            return View(surecHareket);
        }

        // GET: SurecHarekets/Edit/5
        public async Task<ActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            SurecHareket surecHareket = await db.SurecHarekets.FindAsync(id);
            if (surecHareket == null)
            {
                return HttpNotFound();
            }
            return View(surecHareket);
        }

        // POST: SurecHarekets/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Edit([Bind(Include = "SurecHareketId,ProjeId,GelisTarih,GidisTarih,UserId")] SurecHareket surecHareket)
        {
            if (ModelState.IsValid)
            {
                db.Entry(surecHareket).State = EntityState.Modified;
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }
            return View(surecHareket);
        }

        // GET: SurecHarekets/Delete/5
        public async Task<ActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            SurecHareket surecHareket = await db.SurecHarekets.FindAsync(id);
            if (surecHareket == null)
            {
                return HttpNotFound();
            }
            return View(surecHareket);
        }

        // POST: SurecHarekets/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> DeleteConfirmed(int id)
        {
            SurecHareket surecHareket = await db.SurecHarekets.FindAsync(id);
            db.SurecHarekets.Remove(surecHareket);
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
