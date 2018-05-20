using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Fttx_Orm.Models.fiber
{
    public class FiberNodeBaglanti
    {
        public int FiberNodeBaglantiId { get; set; }
        public int BaglantiNode { get; set; }
        public int GirisDevre { get; set; }
        public int BaglantiGirisNode { get; set; }
        public int BaglantiGirisNodeDevre { get; set; }
    }
}
