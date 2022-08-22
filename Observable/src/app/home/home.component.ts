import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval, Subscription , Observable } from 'rxjs';
import { map , filter } from 'rxjs/operators'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit , OnDestroy{

  private firstObsSubscribe!: Subscription;

  constructor(private route: Router) { }

  ngOnInit(): void {

    // this.firstObsSubscribe = interval(1000).subscribe(
    //   count => { console.log(count);
    //   }
    // );

    const customObservable = Observable.create(
      (      observer: {
        complete() :any;
        error: any; next: (arg0: number) => void; 
}) => { 
        let count =0;
        setInterval(
          () => {
            observer.next(count);
            if(count===5){
              observer.complete();
            }
            if(count>3){
              observer.error( new Error( ' Count is greater than 3 ! ') );
            }
            count++;
          },1000
          );
      }
    );

 

    this.firstObsSubscribe =   customObservable.pipe(
      filter( (data:number) =>{ return data >0 }  )  ,
      map( (data:number) => { return "Round:" + ( data + 1) } )   ,
    ). subscribe(                                                  //Subscribing to piped observable with required opearator .
      (data: any) => { console.log(data);
      },
      ( error: any) => {console.log(error);
        alert(error.message);
      },
      () => { 
        console.log("completed!");
        
      }
    );


  }

  ngOnDestroy(): void {
    this.firstObsSubscribe.unsubscribe();
  }

  goUser(){
  this.route.navigate(['user']);
  }

}


