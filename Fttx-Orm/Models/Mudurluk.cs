using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Fttx_Orm.Models
{
  public  class Mudurluk
    {
        public int MudurlukId { get; set; }

        [Required(ErrorMessage = "Lütfen bir ad giriniz")]
        public string MudurlukAdi { get; set; }
        [Required(ErrorMessage = "Lütfen seçim yapın")]
        public int BolgeId { get; set; }
        public bool Durum { get; set; }
       
        public virtual Bolge Bolge { get; set; }
         
    }
}
