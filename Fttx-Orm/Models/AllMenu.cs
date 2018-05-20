using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.Data.Entity;

namespace Fttx_Orm.Models
{
    public class AllMenu
    {
        [Key]
        public  int MenuId  {get;set;}
        [Required(ErrorMessage = "SubMenu seçiniz")]
        public int SubMenuId {get;set;}
        [Required(ErrorMessage = "Menu adı giriniz")]
        public string  MenuName { get; set; }
        [Required(ErrorMessage = "ControllerName giriniz")]
        public string ControlerName { get; set; }
        [Required(ErrorMessage = "ActionName giriniz")]
        public string ActionName { get; set; }


    }
}
