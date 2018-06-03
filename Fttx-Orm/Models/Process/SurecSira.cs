using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Fttx_Orm.Models.Process
{
    public class SurecSira
    {
        public int SurecSiraId { get; set; }
        public int ProjeId { get; set; }
        public int SurecId { get; set; }
        public int Sira { get; set; }

        public bool Durum { get; set; }
    }
}
