using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Fttx_Orm.Models
{
   public class Menu
    {
        public int MenuId { get; set; }
        public int SubMenuId { get; set; }
        public string MenuName { get; set; }

        public string ControlerName { get; set; }
        public string ActionName { get; set; }


    }
}
