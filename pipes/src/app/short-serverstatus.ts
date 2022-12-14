import { PipeTransform ,Pipe } from "@angular/core";

@Pipe({
    name : 'shorten'
})

export class shortenPipe implements PipeTransform{
transform(value: any , limit : number) {
    if(value.length > limit ){
    return value.substr(0,limit)  + '...';    // logic of our pipe using the value parameter 
    }
   return value ;
}
}