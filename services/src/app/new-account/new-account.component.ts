import { Component, OnInit } from '@angular/core';
import { AccountsServices } from '../accounts.service';
import { LoggingService } from '../logging.services';


@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers:[LoggingService]
})
export class NewAccountComponent implements OnInit {

  constructor(
     private variable : LoggingService ,
     private updateAccount : AccountsServices ) { 
      this.updateAccount.statusUpdated.subscribe(
        (status:string) => alert("New Status : "+status)
      );
     }

  ngOnInit(): void {
  }



  onCreateAccount(accountName : string , accountStatus:string){

  this.updateAccount.addAccount(accountName,accountStatus);

 
  
  // this.variable.logStatusChange(accountStatus);
}


}
