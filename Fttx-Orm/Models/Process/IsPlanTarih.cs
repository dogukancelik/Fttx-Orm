using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Fttx_Orm.Models.Process
{
    public class IsPlanTarih
    {
        public  int IsPlanTarihId { get; set; }
        public string IsId { get; set; }
        public string BaslangicTarih { get; set; }
        public string BitisTarih { get; set; }
        public int SurecId { get; set; }
      
   }
}
