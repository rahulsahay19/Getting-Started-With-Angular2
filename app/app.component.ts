import { Component } from '@angular/core';
import { Movie } from './movie';
import { ClickMeComponent }    from './ClickMeComponent';
import { KeyUpComponent }    from './KeyUpComponent';
import { MovieListComponent }    from './MovieListComponent';
import {MovieService} from './movie.service';


@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  directives:[ClickMeComponent,KeyUpComponent,MovieListComponent],
  providers:[MovieService]


})
export class AppComponent {
   title = 'Movies List';
  // movies = [
  //   new Movie(1, 'Gone with the wind'),
  //   new Movie(2, 'Twister'),
  //   new Movie(3, 'Grease'),
  //   new Movie(4, 'Die Hard'),
  //   new Movie(5, 'Jurassic Park')
  // ];
  // myMovie = this.movies[0];
  movies;
  
  constructor(movieService:MovieService){
    this.movies=movieService.getMovies();
  }
      
 }

