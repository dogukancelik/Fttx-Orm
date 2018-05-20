using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.Data.Entity;

namespace Fttx_Orm.Models.fiber
{
   public class Cati
    {
        public int CatiId { get; set; }

        [Required(ErrorMessage = "SantralId Gereklidir")]
        public int SantralId { get; set; }

        [Required(ErrorMessage = "CatiAdi Gereklidir")]
        public string CatiAdi { get; set; }

        public bool Durum { get; set; }

        public virtual Santral Santral { get; set; }
        
    }
}
