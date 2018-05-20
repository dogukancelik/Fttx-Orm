using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Fttx_Orm.Models
{
  public  class Profil
    {
    public int ProfilId { get; set; }
        public int UserId { get; set; }
        public string Adi { get; set; }
        public string Soyadi { get; set; }
        public string Email { get; set; }
        public string Tel { get; set; } 

        public virtual Kullanici kullanici { get; set; }
    }
}
