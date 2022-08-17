import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServersService } from './server.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  servers : {id :number , name :string , status:string}[] = []; 

  constructor(
               private serversService :ServersService,
               private router : Router ,
               private relative : ActivatedRoute   // To get the current Active path
               ) { }

  ngOnInit(): void {
    this.servers = this.serversService.getServers();
  }

  onReload(){
    this.router.navigate(['server']  ,{ relativeTo: this.relative});   // Use the variable to decide the navigation path

  }


}
