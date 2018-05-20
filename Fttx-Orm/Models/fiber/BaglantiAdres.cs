using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.Data.Entity;

namespace Fttx_Orm.Models.fiber
{
    public class BaglantiAdres
    {
        public int BaglantiAdresId { get; set; }

        [Required(ErrorMessage = "EkId gereklidir")]
        public int BaglantiId { get; set; }

        [Required(ErrorMessage = "KoordinatN gereklidir")]
        public string KoordinatN { get; set; }

        [Required(ErrorMessage = "KoordinatS gereklidir")]
        public string KoordinatS { get; set; }

        [Required(ErrorMessage = "Adres gereklidir")]
        public string Adres { get; set; }

        public virtual Baglanti Baglanti { get; set; }

    }
}
