using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Fttx_Orm.Models
{
   public class Depo
    {
        public int DepoId { get; set; }

        [Required(ErrorMessage = "Lütfen bir ad giriniz")]
        public string DepoAdi { get; set; }
        public bool Durum { get; set; }
       
    }
}
