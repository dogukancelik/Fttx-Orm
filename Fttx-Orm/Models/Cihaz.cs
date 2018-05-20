using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Fttx_Orm.Models
{
    public class Cihaz
    {

        public int CihazId { get; set; }

        [Required(ErrorMessage = "Cihaz adı gereklidir")]
        [Display(Name="Cihaz Adı")]
        public string CihazName { get; set; }
        public int CihazTipsId { get; set; }
        public int ProjeId { get; set; }
        public int CihazMarkaId { get; set; }
        public bool Durum { get; set; }
        public virtual CihazTips CihazTips { get; set; }
        public virtual Proje Proje { get; set; }
        public virtual CihazMarka CihazMarka { get; set; }
        //public virtual Santral Santral { get; set; }
        //public virtual Msan Msan { get; set; }
        //public virtual Dslam Dslam { get; set; }
        //public virtual FiberDevre FiberDevre { get; set; }

    }
}
