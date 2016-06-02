

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "MovieDB/MovieGenres", typeof(MovieTutorial.MovieDB.Pages.MovieGenresController))]

namespace MovieTutorial.MovieDB.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("MovieDB/MovieGenres"), Route("{action=index}")]
    public class MovieGenresController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/MovieDB/MovieGenres/MovieGenresIndex.cshtml");
        }
    }
}