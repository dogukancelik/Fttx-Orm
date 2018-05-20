using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Fttx_Orm.Models
{
   public class DepoHareket
    {
        public int DepoHareketId { get; set; }
         public int CihazID { get; set; }
        public  string DepoGelis { get; set; }
        public string DepoGidis { get; set; }
        public DateTime GelisTarihi { get; set; }
        public DateTime CikisTarihi { get; set; }
        public int ProjeID { get; set; }
        public bool Durum { get; set; }
        
    }
}
