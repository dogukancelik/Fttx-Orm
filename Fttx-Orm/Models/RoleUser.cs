using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.Data.Entity;


namespace Fttx_Orm.Models
{
    public class RoleUser
    {   [Key]
        public int RoleUserId { get; set; }
        public int UserId { get; set; }
        public int RoleId { get; set; }

        public virtual Kullanici Kullanici { get; set; }
        public virtual Roles Role { get; set; }
    }
}
