//Service is nothing but simple plain class with some methods in it.
"use strict";
var MovieService = (function () {
    function MovieService() {
    }
    MovieService.prototype.getMovies = function () {
        return ['Gone with the wind', 'Twister', 'Grease', 'Die Hard', 'Jurassic Park'];
    };
    return MovieService;
}());
exports.MovieService = MovieService;
//# sourceMappingURL=movie.service.js.map