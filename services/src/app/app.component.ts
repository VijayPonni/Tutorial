import { Component, OnInit } from '@angular/core';
import { AccountsServices } from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'services';

accounts: {name:string , status:string} [] = [];

constructor(private accountService : AccountsServices ){}

ngOnInit(){
  this.accounts = this.accountService.accounts;
}
}
