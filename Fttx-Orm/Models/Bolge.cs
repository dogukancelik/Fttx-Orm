using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Fttx_Orm.Models
{
    public class Bolge
    {


        public int BolgeId { get; set; }
        [Required(ErrorMessage = "Lütfen bir ad giriniz")]
 
        public string BolgeAdi { get; set; }
        public bool Durum { get; set; }       
    }
}
