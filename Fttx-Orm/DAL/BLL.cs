using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Reflection;
using System.Web.Mvc;

namespace Fttx_Orm.DAL
{
  public static  class BLL
    {
        private static List<Type> GetSubClasses<T>()
        {
            return Assembly.GetCallingAssembly().GetTypes().Where(
                type => type.IsSubclassOf(typeof(T))).ToList();

        }
        public static List<string> GetControllerNames()
        {
            List<string> controllerNames = new List<string>();
            List<string> controllerNamesRep = new List<string>();
            GetSubClasses<Controller>().ForEach(
                type => controllerNames.Add(type.Name));
            foreach (var item in controllerNames) {
                controllerNamesRep.Add(item.Replace("Controller", ""));
            }
            return controllerNamesRep;
        }

    }
}
