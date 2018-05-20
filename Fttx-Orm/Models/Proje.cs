using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Fttx_Orm.Models
{
 public   class Proje
    {

        public int ProjeId { get; set; }
        public string ProjeNo { get; set; }
        public int SantralId { get; set; }
        public int ProjeTipId { get; set; }
        public string ProjeAdi { get; set; }
        public bool Durum { get; set; }
        public virtual Santral Santral { get; set; }
       public virtual ProjeTip ProjeTip { get; set; } 
    }
}
