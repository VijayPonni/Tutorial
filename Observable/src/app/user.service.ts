import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable( { providedIn:'root' } )     //It is an alternative way to tell angular that service is added ( instead of add the new service file in providers array in appmdule.ts file we can use this approach )
 
export class Userservice {
    // activatedEmitter = new EventEmitter<boolean>();      // Using eentEmitters 
    activatedEmitter = new Subject<boolean>();              // Using subject 

}