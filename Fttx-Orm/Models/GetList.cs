using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Fttx_Orm.Models
{
    public class GetList
    {
        public Adres adres { get; set; }
        public Bolge bolge { get; set; }
        public Cihaz cihaz { get; set; }
        public CihazMarka cihazmarka { get; set; }
        public CihazTips cihazTips { get; set; }
        public Depo depo { get; set; }
        public DepoHareket depoHareket { get; set; }
        public DepoStok depoStok { get; set; }
        public Dslam dslam { get; set; }
    
        public Lokasyon lokasyon { get; set; }
        public Msan msan { get; set; }
        public Mudurluk mudurluk { get; set; }
        public Proje proje { get; set; }
        public Santral santral { get; set; }


    }
}