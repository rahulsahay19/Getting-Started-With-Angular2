import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgForm }    from '@angular/common';
import { Movie }    from './movie';
@Component({
  selector: 'movie-form',
  templateUrl: 'app/forms/movie-form.component.html'
})
export class MovieFormComponent {
  isDanger=true;
  @Input() isOk=false;
  // imageURL="http://moviereview.azurewebsites.net/images/rsz_avatar.jpg";
  imageURL="app/forms/Images/rsz_avatar.jpg";
  genres = ['Drama', 'Romance',
            'Adventure', 'Sci-Fiction','Thriller'];
  model = new Movie(1, 'Titanic', 'James Cameron', '1997',27);
  submitted = false;
  onSubmit() { this.submitted = true; }
  // Just to inspect in JSON Model
  get inspect() { return JSON.stringify(this.model); }
  OnClick($event){
    console.log('Hello Angular2',$event);
  }
  OnCheck(){
    this.isOk=!this.isOk;
    this.change.emit({NewValue:this.isOk});
  }

 @Output() change=new EventEmitter();

 onOkChange($event){
   console.log($event);
   
 }
  serverData={
    title:"Die Another Day",
    isOk:true,
    OnCheck:function () {
       this.isOk=!this.serverData.isOk;
    }
  }
}