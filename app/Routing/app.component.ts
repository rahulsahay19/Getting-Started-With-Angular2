import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES, Router, Routes} from "@angular/router";
import {MoviesComponent} from './movies.component';
import {MovieReviewsComponent} from './movie.reviews.component';

@Component({
    selector: "my-app",
    templateUrl: 'app/Routing/app-component.html',
    directives: [ROUTER_DIRECTIVES]
})
@Routes([
    {path: "/movies", component: MoviesComponent},
    {path: "/movieReviews", component: MovieReviewsComponent}
])
export class AppComponent {
    constructor(private _router: Router) {
        //If you want to use Router in your component (for navigation etc), you can inject it like this
    }
}