using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Fttx_Orm.DAL;
using Fttx_Orm.Models;
using System.Web.Routing;

namespace Fttx_Orm.Controllers
{
    public class BaseController : Controller
    {
        FttxContext db = new FttxContext();
        // GET: Base
        protected override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            base.OnActionExecuting(filterContext);

          
            string controllerName = filterContext.RouteData.Values["controller"].ToString();
            string actionName = filterContext.ActionDescriptor.ActionName;
            RLC rlc=new RLC();
            RLCCRD rl = new RLCCRD();
            rlc.actionName = actionName;
            rlc.controlName = controllerName;
            rlc.IsauthAuthenticated = filterContext.HttpContext.User.Identity.IsAuthenticated;
            rlc.UserId = filterContext.HttpContext.Session.IsCookieless.ToString() == null ? "" : filterContext.HttpContext.User.Identity.Name.ToString(); // filterContext.HttpContext.User.Identity.Name;
            rlc = rl.RoleControl(rlc);
            if (rlc!=null)
            {
                // Response.Redirect(Url.Action(rlc.actionName, rlc.controlName));
                filterContext.Result = new RedirectToRouteResult(
                        new RouteValueDictionary{{ "controller", rlc.controlName},
                                    { "action", rlc.actionName }

                                           }); return;

            }



            //filterContext.Result = new RedirectToRouteResult(
            //             new RouteValueDictionary{{ "controller", rlc.controlName},
            //                         { "action", rlc.actionName }

            //                                }); 


            //if (controllerName != "Account")
            //{
            //    if (!filterContext.HttpContext.User.Identity.IsAuthenticated)
            //    {
            //        _controllerName = "Account";
            //        _actionName = "Login";


            //        filterContext.Result = new RedirectToRouteResult(
            //             new RouteValueDictionary{{ "controller", _controllerName.ToString()},
            //                          { "action", _actionName.ToString() }

            //                              }); return;
            //    }
            //    else if (_controllerName != "Home" || _actionName != "Index")
            //    {
            //        string name = filterContext.HttpContext.User.Identity.Name;
            //        int cnt = db.Database.SqlQuery<Fttx_Orm.Models.AllMenu>("SELECT * FROM AllMenu WHERE AllMenu.MenuId in (SELECT MenuId FROM RoleMenu WHERE RoleId IN(SELECT RoleId FROM RoleUser WHERE  UserId='" + name + "') ) AND ControlerName ='" + controllerName + "'  AND ActionName ='" + actionName + "'").ToList().Count();

            //        if (cnt <= 0)
            //        {
            //            _controllerName = "Home";
            //            _actionName = "Index";

            //            filterContext.Result = new RedirectToRouteResult(
            //                 new RouteValueDictionary{{ "controller", _controllerName.ToString()},
            //                          { "action", _actionName.ToString() }

            //                                  }); return;
            //        }
            //    }
            //}
        }
    }
}
