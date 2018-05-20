using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.Data.Entity;

namespace Fttx_Orm.Models
{
    public class Santral
    {
        public int SantralId { get; set; }
        [Required(ErrorMessage = "Lütfen bir ad giriniz")]
        public string SantralAdi { get; set; }
        [Required(ErrorMessage = "Lütfen bir seçim yapınız")]
        public int MudurlukId { get; set; }
        public bool Durum { get; set; }


        public virtual Mudurluk Mudurluk { get; set; }




    }
}
