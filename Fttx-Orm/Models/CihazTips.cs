using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Fttx_Orm.Models
{
 public   class CihazTips
    {
        public int CihazTipsId { get; set; }

        [Required(ErrorMessage = "Lütfen bir ad giriniz")]
        public string CihazTip { get; set; }

        public bool Durum { get; set; }
        
        public virtual IEnumerable<Cihaz> Cihaz { get; set; }

    }
}
