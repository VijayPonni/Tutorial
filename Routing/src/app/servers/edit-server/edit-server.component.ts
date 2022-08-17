import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ServersService } from '../server/server.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {

  server: { id: number; name: string; status: string; } | any;
  serverName = '' ;
  serverStatus = '' ;
  allowEdit = false ;

  constructor(
    private serversService : ServersService,
    private router :ActivatedRoute
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

    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name ;
    this.serverStatus = this.server.status ;
  }

  updateQuery(){
    console.log(" QueryUpdated successfully !");
    
  }

}
