using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Fttx_Orm.Models
{
  public  class CihazMarka
    {
        public int CihazMarkaId { get; set; }
        [Required(ErrorMessage = "Lütfen bir marka adı giriniz")]
        public string MarkaAdi { get; set; }
        public bool Durum { get; set; }

       

    }
}
