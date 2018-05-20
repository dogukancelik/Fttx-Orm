using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Fttx_Orm.Models.fiber
{
    public class BaglantiKapasite
    {
        public int BaglantiKapasiteId { get; set; }
        public int BağlantiId { get; set; }
        public int GirisKapasite { get; set; }
        [Required(ErrorMessage = "Çıkış kapasite gereklidir  ")]
        public int CikisKapasite { get; set; }
        public  string KullanilanDevre { get; set; }
        public string BosDevre { get; set; }
        
    }
}
