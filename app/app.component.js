"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ClickMeComponent_1 = require('./ClickMeComponent');
var KeyUpComponent_1 = require('./KeyUpComponent');
var MovieListComponent_1 = require('./MovieListComponent');
var movie_service_1 = require('./movie.service');
var AppComponent = (function () {
    function AppComponent(movieService) {
        this.title = 'Movies List';
        this.movies = movieService.getMovies();
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.component.html',
            directives: [ClickMeComponent_1.ClickMeComponent, KeyUpComponent_1.KeyUpComponent, MovieListComponent_1.MovieListComponent],
            providers: [movie_service_1.MovieService]
        }), 
        __metadata('design:paramtypes', [movie_service_1.MovieService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map