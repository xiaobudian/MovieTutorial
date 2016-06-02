﻿namespace MovieTutorial.MovieDB {
    export class PersonForm extends Serenity.PrefixedContext {
        static formKey = 'MovieDB.Person';

    }

    export interface PersonForm {
        Firstname: Serenity.StringEditor;
        Lastname: Serenity.StringEditor;
        BirthDate: Serenity.DateEditor;
        BirthPlace: Serenity.StringEditor;
        Gender: Serenity.EnumEditor;
        Height: Serenity.IntegerEditor;
    }

    [['Firstname', () => Serenity.StringEditor], ['Lastname', () => Serenity.StringEditor], ['BirthDate', () => Serenity.DateEditor], ['BirthPlace', () => Serenity.StringEditor], ['Gender', () => Serenity.EnumEditor], ['Height', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(PersonForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

