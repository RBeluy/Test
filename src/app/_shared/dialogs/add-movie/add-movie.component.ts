import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-add-movie',
    templateUrl: './add-movie.component.html',
    styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {
    movieFormGroup: FormGroup;

    constructor(private dialogRef: MatDialogRef<AddMovieComponent>, private _formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.movieFormGroup = this._formBuilder.group({
            title: ['', [Validators.required]]
        });
    }

    addMovie() {
        const movie = this.movieFormGroup.getRawValue();
        movie.id = new Date().getTime();
        this.dialogRef.close(movie);
    }
}
