import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./logging.services";


@Injectable()
export class AccountsServices{

    accounts = [    
        {
          name:'Master Account',
          status:'active'
        },
        {
          name : 'Test Account',
          status: 'Inactive',
        },
        {
          name : 'Hidden Account',
          status: 'Unknown'
        }
      ];

      constructor(private log : LoggingService){

        
      }

  statusUpdated = new EventEmitter<string>();


      addAccount(name:string , status:string){
      this.accounts.push( { name: name ,status:status} );
       this.log.logStatusChange(status);
      }

      updateStatus(id:number , status:string){
        this.accounts[id].status = status;
       this.log.logStatusChange(status);
      }
}