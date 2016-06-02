
namespace MovieTutorial.MovieDB.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("MovieDB.MovieGenres")]
    [BasedOnRow(typeof(Entities.MovieGenresRow))]
    public class MovieGenresColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 MovieGenreId { get; set; }
        public Int32 MovieId { get; set; }
        public Int32 GenreId { get; set; }
    }
}