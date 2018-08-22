import {Injectable} from '@angular/core';
import {Movies} from '../../mocks/movies';
import {Movie} from '../models/movie';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MovieService {
    public movies: BehaviorSubject <Array<Movie>>;

    constructor() {
        this.movies = new BehaviorSubject(Movies.moviesList);
    }

    getMovies(): Observable<Array<Movie>> {
        return this.movies.asObservable();
    }

    updateMovies(arr): void {
        this.movies.next(arr);
    }
}
