using System;
using System.Collections.Generic;
using System.Linq;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using Fttx_Orm.Models;
using Fttx_Orm.Models.fiber;



namespace Fttx_Orm.DAL
{
    public class FttxContext : DbContext
    {
        public FttxContext() : base("FttxDB") { }

        public DbSet<Bolge> Bolgeler { get; set; }
        public DbSet<Mudurluk> Mudurlukler { get; set; }
        public DbSet<Santral> Santraller { get; set; }
        public DbSet<Cihaz> Cihazlar { get; set; }
        public DbSet<CihazMarka> CihazMarkalar { get; set; }
        public DbSet<CihazTips> CihazTipler { get; set; }

        public DbSet<Proje> Projes { get; set; }
        public DbSet<Roles> Roles { get; set; }
        public DbSet<RoleMenu> RolMenus { get; set; }
        public DbSet<RoleUser> RolUsers { get; set; }
        public DbSet<AllMenu> AllMenu { get; set; }
        public DbSet<Profil> Profils { get; set; }

        public System.Data.Entity.DbSet<Fttx_Orm.Models.Adres> Adres { get; set; }

        public System.Data.Entity.DbSet<Fttx_Orm.Models.Depo> Depoes { get; set; }

        public System.Data.Entity.DbSet<Fttx_Orm.Models.DepoHareket> DepoHarekets { get; set; }

        public System.Data.Entity.DbSet<Fttx_Orm.Models.DepoStok> DepoStoks { get; set; }

        public System.Data.Entity.DbSet<Fttx_Orm.Models.Dslam> Dslams { get; set; }

        public System.Data.Entity.DbSet<Fttx_Orm.Models.Msan> Msans { get; set; }

        public System.Data.Entity.DbSet<Fttx_Orm.Models.Menu> Menus { get; set; }
        public DbSet<Kullanici> Kullanicilar { get; set; }

        public System.Data.Entity.DbSet<Fttx_Orm.Models.fiber.Cati> Catis { get; set; }

        public System.Data.Entity.DbSet<Fttx_Orm.Models.fiber.Baglanti> Baglantis { get; set; }

        public System.Data.Entity.DbSet<Fttx_Orm.Models.fiber.Odf> Odfs { get; set; }

        public System.Data.Entity.DbSet<Fttx_Orm.Models.fiber.BaglantiAdres> BaglantiAdres { get; set; }
        public DbSet<FiberNodeBaglanti> FiberNodeBaglantis { get; set; }
        public DbSet<BaglantiKapasite> BaglantiKapasites { get; set; }
        public DbSet<BaglantiTip> BaglantiTips { get; set; }

        public System.Data.Entity.DbSet<Fttx_Orm.Models.fiber.UcNokta> UcNoktas { get; set; }
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
        }

        public System.Data.Entity.DbSet<Fttx_Orm.Models.Process.Is> Iss { get; set; }

        public System.Data.Entity.DbSet<Fttx_Orm.Models.Process.Surec> Surecs { get; set; }

        public System.Data.Entity.DbSet<Fttx_Orm.Models.Process.IsPlanTarih> IsPlanTarihs { get; set; }

        public System.Data.Entity.DbSet<Fttx_Orm.Models.Process.SurecHareket> SurecHarekets { get; set; }

        public System.Data.Entity.DbSet<Fttx_Orm.Models.Process.SurecIsTablosu> SurecIsTablosus { get; set; }

        public System.Data.Entity.DbSet<Fttx_Orm.Models.Process.SurecSira> SurecSiras { get; set; }

        public System.Data.Entity.DbSet<Fttx_Orm.Models.Process.IsTur> IsTurs { get; set; }
    }
}
