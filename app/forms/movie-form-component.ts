import { Component } from '@angular/core';
import { NgForm }    from '@angular/common';
import { Movie }    from './movie';
@Component({
  selector: 'movie-form',
  templateUrl: 'app/forms/movie-form.component.html'
})
export class MovieFormComponent {
  imageURL="http://moviereview.azurewebsites.net/images/rsz_avatar.jpg";
  genres = ['Drama', 'Romance',
            'Adventure', 'Sci-Fiction','Thriller'];
  model = new Movie(1, 'Titanic', 'James Cameron', '1997',27);
  submitted = false;
  onSubmit() { this.submitted = true; }
  // Just to inspect in JSON Model
  get inspect() { return JSON.stringify(this.model); }
}