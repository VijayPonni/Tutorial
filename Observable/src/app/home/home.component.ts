import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval, Subscription , Observable } from 'rxjs';

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
      (      observer: { next: (arg0: number) => void; }) => { 
        let count =0;
        setInterval(
          () => {
            observer.next(count);
            count++;
          },1000
          );
      }
    );

    this.firstObsSubscribe = customObservable.subscribe(
      (data: any) => { console.log(data);
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


