using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Fttx_Orm.DAL
{
    public class RLCCRD
    {
        FttxContext db = new FttxContext();

        public RLC RoleControl(RLC rlc)
        {
  
            int cnt = 0;
            if (rlc.controlName == "Account")
            {
                return rlc = null;

            }
            else if (rlc.IsauthAuthenticated)
            {
                int a = Convert.ToSByte(rlc.UserId);
                bool roluser = db.RolUsers.Any(p => p.UserId ==a  && p.RoleId == 5);

                if (roluser)
                {
                    return rlc = null;
                }else  if (rlc.controlName != "Home")
                {
                    cnt = db.Database.SqlQuery<Fttx_Orm.Models.AllMenu>("SELECT * FROM AllMenu WHERE AllMenu.MenuId in (SELECT MenuId FROM RoleMenu WHERE RoleId IN(SELECT RoleId FROM RoleUser WHERE  UserId='" + rlc.UserId.ToString() + "') ) AND ControlerName ='" + rlc.controlName.ToString() + "'  AND ActionName ='" + rlc.actionName.ToString() + "'").ToList().Count();
                    if (cnt <= 0)
                    {
                        rlc.controlName = "Home";
                        rlc.actionName = "Index";
                        return rlc;
                    }
                    return rlc = null;

                }
                else
                {
                    return rlc = null;
                }
            }
            else
            {
                rlc.controlName = "Account";
                rlc.actionName = "Login";
                return rlc;
            }

        }
    }
}



//if (rlc.controlName != "Account")
//{
//    if (!rlc.identity)
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

