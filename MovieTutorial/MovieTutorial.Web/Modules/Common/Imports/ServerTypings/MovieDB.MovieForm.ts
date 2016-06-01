namespace MovieTutorial.MovieDB {
    export class MovieForm extends Serenity.PrefixedContext {
        static formKey = 'MovieDB.Movie';

    }

    export interface MovieForm {
        Title: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        Storyline: Serenity.TextAreaEditor;
        Year: Serenity.IntegerEditor;
        ReleaseDate: Serenity.DateEditor;
        Runtime: Serenity.IntegerEditor;
        Kind: Serenity.EnumEditor;
    }

    [['Title', () => Serenity.StringEditor], ['Description', () => Serenity.TextAreaEditor], ['Storyline', () => Serenity.TextAreaEditor], ['Year', () => Serenity.IntegerEditor], ['ReleaseDate', () => Serenity.DateEditor], ['Runtime', () => Serenity.IntegerEditor], ['Kind', () => Serenity.EnumEditor]].forEach(x => Object.defineProperty(MovieForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

