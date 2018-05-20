using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.Data.Entity;


namespace Fttx_Orm.Models
{
    public class RoleMenu
    {
        [Key]
        public int RoleMenuId { get; set; }

        [Required(ErrorMessage = "MenuId gereklidir !")]
        public int MenuId { get; set; }

        [Required(ErrorMessage = "RoleId gereklidir !")]
        public int RoleId { get; set; }

        public virtual AllMenu AllMenu { get; set; }
        public virtual Roles Role { get; set; }
    }
}
