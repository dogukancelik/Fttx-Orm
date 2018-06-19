using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Fttx_Orm.DAL;
using Fttx_Orm.Models;
using System.Web.Security;


namespace Fttx_Orm.Controllers
{
    public class AccountController : BaseController
    {
        private FttxContext db = new FttxContext();

        // GET: Account

        [HttpGet]
        public ActionResult Login()
        {
            return View();
        }
        [HttpPost]
        public ActionResult Login (Kullanici kullanici)
       {
            //string UserName = kullanici.UserName;
            //string Password = kullanici.Password;
            // bool rm = kullanici.RememberME;
          Kullanici data = db.Kullanicilar.Where(p => p.UserName == kullanici.UserName).FirstOrDefault(c => c.Password == kullanici.Password);

            if (data !=null)
            {
                if (kullanici.UserName!=null && kullanici.Password!=null)
                {
               
                if ((data.UserName.ToString()==kullanici.UserName.ToString()) && (data.Password.Trim().ToString()==kullanici.Password.ToString()))
                {
                        // Session["KullaniciId"] = data.UserId.ToString();
                        // HttpCookie cookie = new HttpCookie("KullaniciId", data.UserId.ToString());
                        // Response.Cookies["KullaniciId"].Expires = DateTime.Now.AddDays(1);
                        // HttpContext.Response.Cookies.Add(cookie);
                        // FormsAuthentication.SetAuthCookie(data.UserId.ToString(),false);
                        FormsAuthentication.SetAuthCookie(data.UserId.ToString(), false);
                        Session["User"] = data.UserName;
                        return RedirectToAction("Index", "Home");
                }
                }
            }
            return View();
        }
        public ActionResult Logout()
        {
            FormsAuthentication.SignOut();
            return RedirectToAction("Login","Account");
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