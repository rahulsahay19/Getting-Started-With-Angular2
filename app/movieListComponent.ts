import { Component } from '@angular/core';

@Component({
  selector: 'Movie-List',
  template: `
    <input #newMovie
      (keyup.enter)="addMovie(newMovie.value)"
      (blur)="addMovie(newMovie.value); newMovie.value='' ">

    <button (click)=addMovie(newMovie.value)>Add</button>

    <ul><li *ngFor="let movie of movies">{{movie}}</li></ul>
  `
})
export class MovieListComponent {
  movies=['Titanic', 'Grease', 'Rocky', 'Twister'];
  addMovie(newMovie:string) {
    if (newMovie) {
      this.movies.push(newMovie);
    }
  }
}