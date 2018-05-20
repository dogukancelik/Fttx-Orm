using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Fttx_Orm.Models
{
 public   class Lokasyon
    {
        public int LokasyonId { get; set; }
        public string EskiSaha { get; set; }
        public string LokalAdi { get; set; }
        public string BesledigiLokalAdi { get; set; }
        public int CihazID { get; set; }
        public bool Durum { get; set; }
      
        
    }
}
