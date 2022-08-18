import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';
import { ServersService } from '../server.service';

@Component({
  selector: 'app-single-server',
  templateUrl: './single-server.component.html',
  styleUrls: ['./single-server.component.css']
})
export class SingleServerComponent implements OnInit {

 server: { id: number; name: string; status: string; } | any;

  constructor(
    private serversService : ServersService ,
    private route : ActivatedRoute,
    private router : Router
    ) { }

    ngOnInit() {

      this.route.data.subscribe(
        (data:Data) => {
          this.server = data['server'];
        }
      );


      // const id = +this.route.snapshot.params['id'];  
      // // Add + symbol to represent type as number because it has been considered as string as the router link is string
      // // If we use without + symbol , it will show error .
      // this.server = this.serversService.getServer(id);

      // this.route.params.subscribe(
      //   (params : Params) => {
      //     this.server = this.serversService.getServer(+params['id'])
      //   }
      // );


    }

    onEdit(){
    this.router.navigate( ['edit'] , { relativeTo : this.route ,  queryParamsHandling : 'preserve'} );      
    }

 

}
