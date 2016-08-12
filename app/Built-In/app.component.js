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
var review_pipe_1 = require('./review.pipe');
var AppComponent = (function () {
    function AppComponent() {
        this.movies = ['Die Another Day',
            'Godzilla',
            'Tiatanic',
            'Grease',
            'Jungle Book'];
        this.movie = {
            title: "Die Another Day",
            releaseDate: new Date(2002, 3, 15),
            directorName: "Lee Tamahori",
            noOfReviews: 150,
            ticketPrice: 200
        };
        this.movieReview = {
            movieName: "Die Another Day",
            review: "DIE ANOTHER DAY is a unique Bond film for me because I had seen the other entries in the franchise before I discovered the IMDb . In other words my only knowledge of its reputation is down to the comments I have read on these pages and because many commentators are so loud in their condemnation ( Bad CGI , awful title track etc ) I was expecting a really bad movie never mind a really bad Bond movie , but DIE ANOTHER DAY wasn't as bad as I was expecting It's interesting to note that the Bond series never really concerned itself with painting communists as bad guys . OCTOPUSSY ties in with the cold war very much as does THE LIVING DAYLIGHTS to a lesser degree but in no way can the series be criticised as being right wing or reactionary with GOLDENEYE wearing its heart on it's sleeve that Russian gangsterism is more of a worry than Russian communism so it's something of a shock seeing Bond battle Stalinist commies in North Korea . That is in no way a criticism either. We're then treated to a bizarre title sequence composed of a torture montage with quite simply the worst theme tune ever devised for a Bond movie . I don't know what is about the Pierce Brosnan Bonds but they all have very poor title songs despite having all round superb production values and DIE ANOTHER DAY continues the high production values , a lot of people complain about the CGI and I must admit the cartoonish jet at the end does look like a cartoon but compare this sequence to all the action scenes in the 1980s which were composed of Roger Moore standing in front of some back projection and no matter how much you don't want to say it you must confess we've come a long way since then Some people have also let rip that the film is ruined by post modernist self reference but I disagree . Come on chaps when you've seen one Bond movie since the late 1960s you've seen most of them . Plot wise DIE ANOTHER DAY is very , very similar to GOLDENEYE with a British  villain in charge of a death ray in outer space with a fair amount of LICENSED TO KILL thrown in . It should be remembered both YOU ONLY LIVE TWICE and THE SPY WHO LOVED ME had the same identical plot with serious hardware being stolen from the USSR and America in order to start a nuclear holocaust . There is a ridiculous amount of humour though involving John Cleese as Q . I know you shouldn't take James Bond movies seriously but did we need an invisible car The other thing I disliked was Jinx . Think about it , she's tough and kills without hesitation so how come she needs rescuing from Bond ? She's just a cypher there to create a love interest and it's amazing that the producers seriously considered starting a spin off series with Jinx as the heroine . It would have been as successful as CATWOMEN . There is a problem with a plot twist involving both Gustav Graves and Miranda Frost , the twist is good but unfortunately the surprise only works once which means on second viewing the shock value of the plot revelation is gone therefore DIE ANOTHER DAY doesn't have the same enjoyment second , third or fourth viewing unlike classic Bond movies I'm not a big Bond fan but have been fairly impressed with the standards of the franchise from GOLDENEYE to DIE ANOTHER DAY , they've really come leaps and bounds from the Roger Moore debacles like MOONRAKER and VIEW TO A KILL . One aspect that is over looked in the series is the character interaction between Bond and M ( Convincingly played by Judi Dench ) and I hope to see this abrasive relationship continue when the series returns with a new actor in the lead role",
            rating: 5
        };
        this.myVal = 0;
    }
    AppComponent.prototype.OnChange = function () {
        if (this.myVal === 5)
            this.myVal = 0;
        else
            this.myVal++;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/Built-In/ng-customPipe.component.html',
            pipes: [review_pipe_1.ReviewPipe]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map