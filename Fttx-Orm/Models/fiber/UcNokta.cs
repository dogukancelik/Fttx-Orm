using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Fttx_Orm.Models.fiber
{
  public  class UcNokta
    {
        public int UcNoktaId { get; set; }
        public int FiberNodeBaglantiId { get; set; }
        public int ProjeId { get; set; }
        public string UcNoktaAdi { get; set; }

        public virtual FiberNodeBaglanti FiberNodeBaglanti { get; set; }
        public virtual Proje Proje { get; set; }
    }
}
