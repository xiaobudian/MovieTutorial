
namespace MovieTutorial.MovieDB {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class MovieGenresDialog extends Serenity.EntityDialog<MovieGenresRow, any> {
        protected getFormKey() { return MovieGenresForm.formKey; }
        protected getIdProperty() { return MovieGenresRow.idProperty; }
        protected getLocalTextPrefix() { return MovieGenresRow.localTextPrefix; }
        protected getService() { return MovieGenresService.baseUrl; }

        protected form = new MovieGenresForm(this.idPrefix);
    }
}