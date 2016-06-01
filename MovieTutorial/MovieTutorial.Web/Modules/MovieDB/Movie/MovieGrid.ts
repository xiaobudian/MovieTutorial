
namespace MovieTutorial.MovieDB {

    @Serenity.Decorators.registerClass()
    export class MovieGrid extends Serenity.EntityGrid<MovieRow, any> {
        protected getColumnsKey() { return 'MovieDB.Movie'; }
        protected getDialogType() { return MovieDialog; }
        protected getIdProperty() { return MovieRow.idProperty; }
        protected getLocalTextPrefix() { return MovieRow.localTextPrefix; }
        protected getService() { return MovieService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        //protected getQuickSearchFields(): Serenity.QuickSearchField[] {
        //    return [
        //        { name: "", title: "all" },
        //        { name: "Description", title: "description" },
        //    ];
        //}


        //protected getQuickSearchFields(): Serenity.QuickSearchField[] {
        //    let fld = MovieRow.Fields;
        //    return [
        //        { name: "", title: "All" },
        //        { name: fld.Description, title: fld.Description },
        //        { name: fld.Storyline, title: fld.Storyline },
        //        { name: fld.Year, title: fld.Year },
        //    ];
        //}

        protected getQuickSearchFields(): Serenity.QuickSearchField[] {
            let fld = MovieRow.Fields;
            let txt = (s) => Q.text("Db." +
                MovieRow.localTextPrefix + "." + s).toLowerCase();

            return [
                { name: "", title: "All" },
                { name: fld.Description, title: txt(fld.Description) },
                { name: fld.Storyline, title: txt(fld.Storyline) },
                { name: fld.Year, title: txt(fld.Year) },
                { name: fld.Kind, title: txt(fld.Kind) },
            ];
        }
    }
}