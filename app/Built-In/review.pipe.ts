import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name:'review'})

export class ReviewPipe implements PipeTransform{
    transform(value:string, args:string[]){
        if(value){
            return value.substring(0, 120) + ".....";
        }
    }
}