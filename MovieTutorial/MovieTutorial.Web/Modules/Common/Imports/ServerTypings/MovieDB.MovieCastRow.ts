﻿namespace MovieTutorial.MovieDB {
    export interface MovieCastRow {
        MovieCastId?: number;
        MovieId?: number;
        PersonId?: number;
        Character?: string;
        MovieTitle?: string;
        MovieDescription?: string;
        MovieStoryline?: string;
        MovieYear?: number;
        MovieReleaseDate?: string;
        MovieRuntime?: number;
        MovieKind?: number;
        PersonFirstname?: string;
        PersonLastname?: string;
        PersonFullname?: string;
        PersonBirthDate?: string;
        PersonBirthPlace?: string;
        PersonGender?: number;
        PersonHeight?: number;
    }

    export namespace MovieCastRow {
        export const idProperty = 'MovieCastId';
        export const nameProperty = 'Character';
        export const localTextPrefix = 'MovieDB.MovieCast';

        export namespace Fields {
            export declare const MovieCastId: string;
            export declare const MovieId: string;
            export declare const PersonId: string;
            export declare const Character: string;
            export declare const MovieTitle: string;
            export declare const MovieDescription: string;
            export declare const MovieStoryline: string;
            export declare const MovieYear: string;
            export declare const MovieReleaseDate: string;
            export declare const MovieRuntime: string;
            export declare const MovieKind: string;
            export declare const PersonFirstname: string;
            export declare const PersonLastname: string;
            export declare const PersonFullname: string;
            export declare const PersonBirthDate: string;
            export declare const PersonBirthPlace: string;
            export declare const PersonGender: string;
            export declare const PersonHeight: string;
        }

        ['MovieCastId', 'MovieId', 'PersonId', 'Character', 'MovieTitle', 'MovieDescription', 'MovieStoryline', 'MovieYear', 'MovieReleaseDate', 'MovieRuntime', 'MovieKind', 'PersonFirstname', 'PersonLastname', 'PersonFullname', 'PersonBirthDate', 'PersonBirthPlace', 'PersonGender', 'PersonHeight'].forEach(x => (<any>Fields)[x] = x);
    }
}

