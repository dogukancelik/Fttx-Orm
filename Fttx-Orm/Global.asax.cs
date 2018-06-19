using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;
using System.Data.Entity;
using System.Web.Security;

namespace Fttx_Orm
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            //using (Fttx_Orm.DAL.FttxContext db = new DAL.FttxContext())
            //{
            //    //Bu metod, eğer veritabanımız oluşturulmamış ise, oluşturulmasını sağlıyor.
            //     db.Database.CreateIfNotExists();
           
            //}
            Database.SetInitializer(new DropCreateDatabaseIfModelChanges<Fttx_Orm.DAL.FttxContext>());
            AreaRegistration.RegisterAllAreas();
            RouteConfig.RegisterRoutes(RouteTable.Routes);
           
        }

        protected void Application_End(object sender, EventArgs e)
        {
            FormsAuthentication.SignOut();
            Session.RemoveAll();
            Session.Clear();
        }
    }
}
