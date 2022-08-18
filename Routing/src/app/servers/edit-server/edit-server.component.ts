import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ServersService } from '../server/server.service';
import { CanComponentDeactivate } from './can-deactivate-guard.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit , CanComponentDeactivate {

  server: { id: number; name: string; status: string; } | any;
  serverName = '' ;
  serverStatus = '' ;
  allowEdit = false ;
  changesSaved = false ;

  constructor(
    private serversService : ServersService,
    private router :ActivatedRoute,
    private route : Router
  ) { }

 ngOnInit(): void {
    console.log(this.router.snapshot.queryParams);   // Printing the queryparams of currently active route with snapshot
    console.log(this.router.snapshot.fragment);      // Printing the fragment of currently active route with snapshot

   
    this.router.queryParams.subscribe(                // Accessing the queryparams wih subscribe method .
        (queryParams : Params )  => {
          this.allowEdit = queryParams['allowEdit'] === '1' ? true : false ;
        }

    );                                         
    this.router.fragment.subscribe();                 // Accessing the fragment wih subscribe method .
    // const id  = +this.router.snapshot.params['id'];
    this.server = this.serversService.getServer(1);
    // need to subscibe
    this.serverName = this.server.name ;
    this.serverStatus = this.server.status ;
  }

  onUpdateServer(){
    this.serversService.updateServer(this.server.id , { name : this.serverName , status : this.serverStatus});
    this.changesSaved = true ;
    this.route.navigate(['../']  , {relativeTo : this.router});
  }


  canDeactivate() : boolean | Observable<boolean> | Promise<boolean> {

    if(!this.allowEdit){
      return true;
    }
    
    if( (this.serverName === this.serverName || (this.serverName === this.serverName) ) && !this.changesSaved){
    return confirm("Do you want to discard the changes ? ");
  }
  else {
    return true;
  }

 
// if(!this.allowEdit){
//   return true;
// }
// if( (this.serverName !== this.serverName || this.serverStatus !== this.serverStatus ) && !this.changesSaved ){
//   return confirm("Do you want to discard the changes ? ");
// }
// else {
//   return true;
// }
   


  }
 



}
