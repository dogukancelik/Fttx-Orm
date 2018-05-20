using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Fttx_Orm.Models
{ 
  public  class Msan
    {
        public int MsanId { get; set; }
        [Display(Name="Cihaz Adı")]
        public int CihazId { get; set; }
        [Required(ErrorMessage = "MsanAdı gereklidir")]
        [Display(Name = "Msan Adı")]
        public string MsanAdi { get; set; }

        [Required(ErrorMessage = "MsanIp gereklidir")]
        public string MsanIp { get; set; }
        
        public bool Durum { get; set; }

        public virtual Cihaz Cihaz { get; set; }
        
        }
    
    }

