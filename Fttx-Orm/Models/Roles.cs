using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.Data.Entity;


namespace Fttx_Orm.Models
{
    public class Roles
    {
        [Key]
        public int RoleId { get; set; }
        [Required(ErrorMessage = "İsim giriniz")]
        public string RoleName { get; set; }

    }
}
