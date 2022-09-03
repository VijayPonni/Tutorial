import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { LoggingService } from '../logging-service';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  // ingredients!: Ingredient[];
  ingredients! : Observable< { ingredients: Ingredient[] }  | any >;   //change to Observable

  private subscription!: Subscription;

  constructor(
    private slService: ShoppingListService,
    private lofinService : LoggingService ,
    private store : Store < { shoppingList : { ingredients: Ingredient[] }  } >
    ) { }

  ngOnInit() {
    
     this.ingredients = this.store.select('shoppingList')

    this.lofinService.printlog("Hello from ShoppingList NgOnit ") ;

    // this.ingredients = this.slService.getIngredients();
    // this.subscription = this.slService.ingredientsChanged
    //   .subscribe(
    //     (ingredients: Ingredient[]) => {
    //       this.ingredients = ingredients;
    //     }
    //   );
  }

  onEditItem(index: number) {
    this.slService.startedEditing.next(index);
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }
}
