import { Component, Input, OnInit } from '@angular/core';
import { AccountsServices } from '../accounts.service';
import { LoggingService  } from '../logging.services';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers:[LoggingService]
})
export class AccountComponent implements OnInit {

  constructor(
    private variabel : LoggingService,
    private accountservice : AccountsServices
    ) { }

  ngOnInit(): void {
  }

@Input()  account!:{ name : string , status : string};
@Input() id!:number;



 onSetTo(status:string){

  this.accountservice.updateStatus(this.id, status)
  // this.variabel.logStatusChange(status);
  this.accountservice.statusUpdated.emit(status);
}


}
