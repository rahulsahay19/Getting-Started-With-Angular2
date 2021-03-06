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
var movie_1 = require('./movie');
var MovieFormComponent = (function () {
    function MovieFormComponent() {
        this.isDanger = true;
        this.isOk = false;
        // imageURL="http://moviereview.azurewebsites.net/images/rsz_avatar.jpg";
        this.imageURL = "app/forms/Images/rsz_avatar.jpg";
        this.genres = ['Drama', 'Romance',
            'Adventure', 'Sci-Fiction', 'Thriller'];
        this.model = new movie_1.Movie(1, 'Titanic', 'James Cameron', '1997', 27);
        this.submitted = false;
        this.change = new core_1.EventEmitter();
        this.serverData = {
            title: "Die Another Day",
            isOk: true,
            OnCheck: function () {
                this.isOk = !this.serverData.isOk;
            }
        };
    }
    MovieFormComponent.prototype.onSubmit = function () { this.submitted = true; };
    Object.defineProperty(MovieFormComponent.prototype, "inspect", {
        // Just to inspect in JSON Model
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    MovieFormComponent.prototype.OnClick = function ($event) {
        console.log('Hello Angular2', $event);
    };
    MovieFormComponent.prototype.OnCheck = function () {
        this.isOk = !this.isOk;
        this.change.emit({ NewValue: this.isOk });
    };
    MovieFormComponent.prototype.onOkChange = function ($event) {
        console.log($event);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MovieFormComponent.prototype, "isOk", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], MovieFormComponent.prototype, "change", void 0);
    MovieFormComponent = __decorate([
        core_1.Component({
            selector: 'movie-form',
            templateUrl: 'app/forms/movie-form.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], MovieFormComponent);
    return MovieFormComponent;
}());
exports.MovieFormComponent = MovieFormComponent;
//# sourceMappingURL=movie-form-component.js.map