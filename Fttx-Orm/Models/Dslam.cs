using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Fttx_Orm.Models
{
    public class Dslam
    {

        public int DslamId { get; set; }


        [Required(ErrorMessage = "Cihaz Adı gereklidir")]
        [Display(Name="Cihaz Adı")]
        public int CihazId { get; set; }

        [Range(0, int.MaxValue, ErrorMessage = "Lütfen sayısal değer girin")]
        
        public int DslamAdi { get; set; }
            
        [Required(ErrorMessage = "DslamIp gereklidir")]
        public string DslamIp { get; set; }

        public bool Durum { get; set; }

        public virtual Cihaz Cihaz { get; set; }

    }

}
