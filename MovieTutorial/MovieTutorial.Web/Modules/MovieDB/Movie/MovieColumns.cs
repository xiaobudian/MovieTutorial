
namespace MovieTutorial.MovieDB.Columns
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;

    [ColumnsScript("MovieDB.Movie")]
    [BasedOnRow(typeof(Entities.MovieRow))]
    public class MovieColumns
    {
        //先后顺序会在列表页按此顺序展示
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 MovieId { get; set; }
        //[Width(100), QuickFilter]
        //public String GenreName { get; set; }
        [EditLink]
        public String Title { get; set; }
        public String Description { get; set; }
        public String Storyline { get; set; }
        public Int32 Year { get; set; }
        public DateTime ReleaseDate { get; set; }
        [DisplayName("Runtime in Minutes"), Width(150), AlignCenter]
        public Int32 Runtime { get; set; }
        public MovieKind? Kind { get; set; }

        [Width(200), GenreListFormatter]
        public List<Int32> GenreList { get; set; }
    }
}