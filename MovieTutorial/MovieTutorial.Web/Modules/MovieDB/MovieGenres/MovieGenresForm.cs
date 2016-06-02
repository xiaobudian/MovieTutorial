
namespace MovieTutorial.MovieDB.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("MovieDB.MovieGenres")]
    [BasedOnRow(typeof(Entities.MovieGenresRow))]
    public class MovieGenresForm
    {
        public Int32 MovieId { get; set; }
        public Int32 GenreId { get; set; }
    }
}