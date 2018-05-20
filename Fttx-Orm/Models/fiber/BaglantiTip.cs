using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Fttx_Orm.Models.fiber
{
    public class BaglantiTip
    {

        public int BaglantiTipId { get; set; }
        public string BaglantiTipAdi { get; set; }
        public  bool Durum { get; set; }
        public string Aciklama { get; set; }

    }
}
