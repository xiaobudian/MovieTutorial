using FluentMigrator;

namespace MovieTutorial.Migrations.DefaultDB
{
    [Migration(20160601135901)]
    public class DefaultDB_20160601_135901_MovieKind : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("Movie").InSchema("mov")
                 .AddColumn("Kind").AsInt32().NotNullable().WithDefaultValue(1);
        }

      
    }
}