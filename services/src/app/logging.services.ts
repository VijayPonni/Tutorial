import { Injectable } from "@angular/core";

@Injectable()

export class LoggingService{
    logStatusChange(status:string){
  console.log("A server staus Changed , new Staus : " + status);
   
    }
}