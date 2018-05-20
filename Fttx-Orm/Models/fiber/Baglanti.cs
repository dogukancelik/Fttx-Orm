using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Fttx_Orm.Models.fiber
{
   public class Baglanti
    {
        [Key]
        public int BaglantiId { get; set; }
        public int BaglanitipId { get; set; }
        [Required(ErrorMessage = "Giriş kapasite gereklidir  ")]
        
        public int OdfId { get; set; }
        [Required(ErrorMessage = "Baglantı Adı gereklidir")]
        public string BaglantiAdi { get; set; }
        public virtual Odf Odf { get; set; }

    }
}
