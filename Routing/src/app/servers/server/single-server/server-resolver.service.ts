import { Injectable } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ServersService } from "../server.service";

interface Server{
    id : number;
    name : string ;
    status : string ;
}

@Injectable()
export class ServerResolver implements Resolve<Server> {
    
    constructor(
        private service : ServersService
    ){ }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
    Server | Observable<Server> | Promise<Server> | any {
        // console.log("hi");
        return this.service.getServer(+route.params['id']);
    }
 

}