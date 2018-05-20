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
    public class AdresController : BaseController
    {
        private FttxContext db = new FttxContext();

        // GET: Adres
        public async Task<ActionResult> Index()
        {
            var adres = db.Adres.Include(a => a.Cihaz);
            return View(await adres.ToListAsync());
        }

        // GET: Adres/Details/5
        public async Task<ActionResult> Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Adres adres = await db.Adres.FindAsync(id);
            if (adres == null)
            {
                return HttpNotFound();
            }
            return View(adres);
        }

        // GET: Adres/Create
        public ActionResult Create()
        {
        
            ViewBag.CihazId = new SelectList(db.Database.SqlQuery<Fttx_Orm.Models.Cihaz>("select * from Cihaz where CihazId not in (select CihazId from Adres where Durum=1) and Durum=1").ToList(), "CihazId", "CihazName");

            return View();
        }

        // POST: Adres/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Create([Bind(Include = "AdresId,CihazId,Ilce_Adi,Mahalle,Cadde,Sokak,BinaAdi,BinaNo,AdresDetay,KoordinatN,KoordinatS,Durum")] Adres adres)
        {
            if (ModelState.IsValid)
            {
                db.Adres.Add(adres);
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }
            ViewBag.CihazId = new SelectList(db.Database.SqlQuery<Fttx_Orm.Models.Cihaz>("select * from Cihaz where CihazId not in (select CihazId from Adres where Durum=1) and Durum=1").ToList(), "CihazId", "CihazName", adres.CihazId);
             return View(adres);
        }

        // GET: Adres/Edit/5
        public async Task<ActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Adres adres = await db.Adres.FindAsync(id);
            if (adres == null)
            {
                return HttpNotFound();
            }
            ViewBag.CihazId = new SelectList(db.Database.SqlQuery<Fttx_Orm.Models.Cihaz>("select * from Cihaz where CihazId not in (select CihazId from Adrers where Durum=1) and Durum=1").ToList(), "CihazId", "CihazName",adres.CihazId);

            return View(adres);
        }

        // POST: Adres/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Edit([Bind(Include = "AdresId,CihazId,Ilce_Adi,Mahalle,Cadde,Sokak,BinaAdi,BinaNo,AdresDetay,KoordinatN,KoordinatS,Durum")] Adres adres)
        {
            if (ModelState.IsValid)
            {
                db.Entry(adres).State = EntityState.Modified;
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }

            ViewBag.CihazId = new SelectList(db.Database.SqlQuery<Fttx_Orm.Models.Cihaz>("select * from Cihaz where CihazId not in (select CihazId from Adrers where Durum=1) and Durum=1").ToList(), "CihazId", "CihazName", adres.CihazId);

            return View(adres);
        }

        // GET: Adres/Delete/5
        public async Task<ActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Adres adres = await db.Adres.FindAsync(id);
            if (adres == null)
            {
                return HttpNotFound();
            }
            return View(adres);
        }

        // POST: Adres/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> DeleteConfirmed(int id)
        {
            Adres adres = await db.Adres.FindAsync(id);
            db.Adres.Remove(adres);
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
