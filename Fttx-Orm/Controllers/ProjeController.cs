using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Fttx_Orm.Models;
using Fttx_Orm.DAL;
using System.Web.Mvc;
using System.Data.Entity;
using System.Net;

namespace Fttx_Orm.Controllers
{
    public class ProjeController : BaseController
    {
        private FttxContext db = new FttxContext();
        // GET: Proje

        #region /*-- Bolge-- */
        public ActionResult BolgeEkle()
        {
            ViewData["BolgeListe"] = db.Bolgeler.ToList();
            return View();
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult BolgeEkle(Bolge bolge)
        {
            ViewData["BolgeListe"] = db.Bolgeler.ToList();
            if (ModelState.IsValid)
            {
                db.Bolgeler.Add(bolge);
                db.SaveChanges();
                return RedirectToAction("BolgeEkle", "Proje");
            }
            return View();
        }

        [HttpGet]
        public ActionResult BolgeListe()
        {
            //List<Bolge> bolge = db.Bolgeler.ToList<Bolge>();
            //List<Bolge> bolge = (from u in db.Bolgeler
            //                     select u).ToList();
            ViewData["BolgeListe"] = db.Bolgeler.ToList();
            return View();

        }

        [HttpGet]
        public ActionResult BolgeDuzenle(int? id)
        {

            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Bolge bolge = db.Bolgeler.Find(id);
            if (bolge == null)
            {
                return HttpNotFound();
            }
            return View(bolge);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult BolgeDuzenle(Bolge bolge)
        {
            if (ModelState.IsValid)
            {
                db.Entry(bolge).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("BolgeEkle");
            }
            return View();
        }
        public ActionResult BolgeSil(int? id)
        {
            Bolge bolge = db.Bolgeler.Find(id);
            db.Bolgeler.Remove(bolge);
            db.SaveChanges();
            return RedirectToAction("BolgeEkle");
        }

        #endregion

        #region  /*--Mdürlük--*/

        public ActionResult MudurlukEkle()
        {
            ViewData["MudurlukListe"] = db.Mudurlukler.ToList();
            ViewBag.BolgeId = new SelectList(db.Bolgeler.Where(O => O.Durum == true).ToList(), "BolgeId", "BolgeAdi");
            return View();
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult MudurlukEkle(Mudurluk mudurluk)
        {
            ViewBag.BolgeId = new SelectList(db.Bolgeler.Where(O => O.Durum == true).ToList(), "BolgeId", "BolgeAdi");
            ViewData["MudurlukListe"] = db.Mudurlukler.ToList();
            if (ModelState.IsValid)
            {
                db.Mudurlukler.Add(mudurluk);
                db.SaveChanges();
                return RedirectToAction("MudurlukEkle", "Proje");
            }
            return View();
        }

        [HttpGet]
        public ActionResult MudurlukListe()
        {
            //List<Bolge> bolge = db.Bolgeler.ToList<Bolge>();
            //List<Bolge> bolge = (from u in db.Bolgeler
            //                     select u).ToList();
            ViewData["MudurlukListe"] = db.Bolgeler.ToList();
            return  PartialView("MudurlukListe",db.Mudurlukler.ToList());

        }

        [HttpGet]
        public ActionResult MudurlukDuzenle(int? id)
        {

            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Mudurluk mudurluk = db.Mudurlukler.Find(id);
            if (mudurluk == null)
            {
                return HttpNotFound();
            }
            ViewBag.BolgeId = new SelectList(db.Bolgeler.Where(O => O.Durum == true).ToList(), "BolgeId", "BolgeAdi", mudurluk.BolgeId);
            return View(mudurluk);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult MudurlukDuzenle(Mudurluk mudurluk)
        {
            if (ModelState.IsValid)
            {
                db.Entry(mudurluk).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("MudurlukEkle");
            }
            return View();
        }
        public ActionResult MudurlukSil(int? id)
        {
            Mudurluk mudurluk = db.Mudurlukler.Find(id);
            db.Mudurlukler.Remove(mudurluk);
            db.SaveChanges();
            return RedirectToAction("MudurlukEkle");
        }
        #endregion

        #region  /*--Santral--*/

        public ActionResult SantralEkle()
        {
            ViewData["SantralListe"] = db.Santraller.ToList();
            ViewBag.MudurlukId = new SelectList(db.Mudurlukler.Where(O => O.Durum == true).ToList(), "MudurlukId", "MudurlukAdi");
            return View();
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult SantralEkle(Santral santral)
        {
            ViewBag.MudurlukId = new SelectList(db.Mudurlukler.Where(O => O.Durum == true).ToList(), "MudurlukId", "MudurlukAdi");
            ViewData["SantralListe"] = db.Santraller.ToList();
            if (ModelState.IsValid)
            {
                db.Santraller.Add(santral);
                db.SaveChanges();
                return RedirectToAction("SantralEkle", "Proje");
            }
            return View();
        }

        [HttpGet]
        public ActionResult SantralListe()
        {
            //List<Bolge> bolge = db.Bolgeler.ToList<Bolge>();
            //List<Bolge> bolge = (from u in db.Bolgeler
            //                     select u).ToList();
            ViewData["SantralListe"] = db.Bolgeler.ToList();
            return PartialView("SantralListe", db.Santraller.ToList());

        }

        [HttpGet]
        public ActionResult SantralDuzenle(int? id)
        {

            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
           Santral santral = db.Santraller.Find(id);
            if (santral == null)
            {
                return HttpNotFound();
            }
            ViewBag.MudurlukId = new SelectList(db.Mudurlukler.Where(O => O.Durum == true).ToList(), "MudurlukId", "MudurlukAdi", santral.MudurlukId);
            return View(santral);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult SantralDuzenle(Santral santral)
        {
            if (ModelState.IsValid)
            {
                db.Entry(santral).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("SantralEkle");
            }
            return View();
        }
        public ActionResult SantralSil(int? id)
        {
            Santral santral = db.Santraller.Find(id);
            db.Santraller.Remove(santral);
            db.SaveChanges();
            return RedirectToAction("SantralEkle");
        }
        #endregion

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