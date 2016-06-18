"use strict";
var Movie = (function () {
    function Movie(id, movieName, directorName, releaseYear, reviews) {
        this.id = id;
        this.movieName = movieName;
        this.directorName = directorName;
        this.releaseYear = releaseYear;
        this.reviews = reviews;
    }
    return Movie;
}());
exports.Movie = Movie;
//# sourceMappingURL=movie.js.map