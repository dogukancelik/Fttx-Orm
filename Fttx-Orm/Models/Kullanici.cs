using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Fttx_Orm.Models
{
    [Table("Kullanici")]
    public class Kullanici
    {
        [Key]
        public int UserId { get; set; }

        [Required(ErrorMessage = "Kullanıcı adı giriniz")]
        public string UserName { get; set; }

        [Required(ErrorMessage = "Şifre giriniz")]
        public string Password { get; set; }
      
    }
}
