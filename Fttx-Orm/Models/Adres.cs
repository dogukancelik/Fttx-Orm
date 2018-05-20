using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Fttx_Orm.Models
{
    public class Adres
    {
        public int AdresId { get; set; }
        public int CihazId { get; set; }

        [Required(ErrorMessage = "İlçe adı gereklidir")]
        public string Ilce_Adi { get; set; }

        [Required(ErrorMessage = "Mahalle adı gereklidir")]
        public string Mahalle { get; set; }

        [Required(ErrorMessage = "Cadde adı gereklidir")]
        public string Cadde { get; set; }

        [Required(ErrorMessage = "Sokak adı gereklidir")]
        public string Sokak { get; set; }

        [Required(ErrorMessage = "Bina adı gereklidir")]
        public string BinaAdi { get; set; }

        [Required(ErrorMessage = "Bina No gereklidir")]
        public string BinaNo { get; set; }

        [Required(ErrorMessage = "Adres detay gereklidir")]
        public string AdresDetay { get; set; }

        [Required(ErrorMessage = "KoordinatN gereklidir")]
        public string KoordinatN { get; set; }

        [Required(ErrorMessage = "KoordinatS gereklidir")]
        public string KoordinatS { get; set; }
        public bool Durum { get; set; }
    public virtual Cihaz Cihaz { get; set; }
    }
}
