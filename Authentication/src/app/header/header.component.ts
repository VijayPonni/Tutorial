import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';

import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit , OnDestroy{

  userSubscription!: Subscription;
  isAuthenticated = false ;

  constructor(
    private dataStorageService: DataStorageService ,
    private auth : AuthService,
    ) {}

    ngOnInit(): void {
      this.userSubscription = this.auth.user.subscribe(
        user => {
          this.isAuthenticated = !!user ;
          console.log(!user);
          console.log(!!user);
          
          
        }
      );
    }

  onSaveData() {
    this.dataStorageService.storeRecipes();
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes();
  }

  onLogOut(){
    console.log("hi");
    
    this.auth.logOut();
  }

  ngOnDestroy(): void {
     this.userSubscription.unsubscribe();
  }
}
