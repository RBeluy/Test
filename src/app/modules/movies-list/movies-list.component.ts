import {Component, OnInit} from '@angular/core';
import {Movie} from '../../_shared/models/movie';
import {MovieService} from '../../_shared/services/movie.service';
import {Observable} from 'rxjs';
import {MatDialog} from '@angular/material';
import {AddMovieComponent} from '../../_shared/dialogs/add-movie/add-movie.component';
import { ClickEvent, RatingChangeEvent } from 'angular-star-rating';

@Component({
    selector: 'app-movies-list',
    templateUrl: './movies-list.component.html',
    styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
    public movies: Array<Movie>;
    public movies$: Observable<Array<Movie>>;
    public onClickResult: ClickEvent;
    public onRatingChangeResult: RatingChangeEvent;

    constructor(private movieService: MovieService, public dialog: MatDialog) {
        this.movies$ = new Observable();
    }

    ngOnInit() {
        this.movies$ = this.movieService.getMovies();
        this.movies$.subscribe(data => {
            this.movies = data;
        });
    }

    removeMovie(id): void {
        this.movies = this.movies.filter(element => element.id !== id );
        this.movieService.updateMovies(this.movies);
    }

    addMovie(): void {
        const dialogRef = this.dialog.open(AddMovieComponent);
        dialogRef.afterClosed().subscribe((res: any) => {
            if (!res) return;
            this.movies.unshift(res);
            this.movieService.updateMovies(this.movies);
        });
    }

    onClick($event: ClickEvent): void {
        this.onClickResult = $event;
    }

    onRatingChange ($event: RatingChangeEvent, i): void {
        this.movies[i].rating = $event.rating;
        this.movieService.updateMovies(this.movies);
        this.onRatingChangeResult = $event;
    }


}
