using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Fttx_Orm.Models.Process
{
    public class SurecHareket
    {
        public int SurecHareketId { get; set; }
        public int ProjeId { get; set; }
        public string GelisTarih { get; set; }
        public string GidisTarih { get; set; }
        public int UserId { get; set; }
    }
}
