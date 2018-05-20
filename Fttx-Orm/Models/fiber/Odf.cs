using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Fttx_Orm.Models.fiber
{
    public class Odf
    {
        public int OdfId { get; set; }

        [Required(ErrorMessage = "CatiId gereklidir")]
        public int CatiId { get; set;}

        [Required(ErrorMessage = "Kapasite gereklidir")]
        public int Kapasite { get; set; }

        [Required(ErrorMessage = "OdfAdi gereklidir")]
        public string OdfAdi { get; set; }

        public bool Durum { get; set; }
      
        public virtual Cati Cati { get; set; }     
        
    }
}
