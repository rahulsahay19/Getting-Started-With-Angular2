import { Component }         from '@angular/core';
import { MovieFormComponent } from './movie-form-component';
@Component({
  selector: 'my-app',
  template: '<movie-form></movie-form>',
  directives: [MovieFormComponent]
})
export class AppComponent { 
  
}