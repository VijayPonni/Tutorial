import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { Ingredient } from '../../shared/ingredient.model';

import * as ShoppingListActions from '../Store/shopping-list.actions'
import * as fromApp from '../../Store/app-reducer'

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', { static: false })
  slForm!: NgForm;
  subscription!: Subscription;
  editMode = false;
  editedItem!: Ingredient;

  constructor(
    private store : Store<fromApp.AppState> 
    ) { }

  ngOnInit() {

   this.subscription =  this.store.select('shoppingList').subscribe( startData => {
      if(startData.editedIngredientIndex > -1 ){
        this.editMode =true;
        this.editedItem = startData.editedIngredient;
        this.slForm.setValue({
                  name: this.editedItem.name,
                  amount: this.editedItem.amount
                })
      }
      else {
        this.editMode= false ;
      }
    })

    // this.subscription = this.slService.startedEditing
    //   .subscribe(
    //     (index: number) => {
    //       this.editedItemIndex = index;
    //       this.editMode = true;
    //       this.editedItem = this.slService.getIngredient(index);
    //       this.slForm.setValue({
    //         name: this.editedItem.name,
    //         amount: this.editedItem.amount
    //       })
    //     }
    //   );
  }

  onSubmit(form: NgForm) {

    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      // this.slService.updateIngredient(this.editedItemIndex, newIngredient);   // Updating ingredient 
      this.store.dispatch( 
        new ShoppingListActions.UpdateIngredient( newIngredient)          
        )
        

    } else {
      // this.slService.addIngredient(newIngredient);    // Adding ingredient  
      this.store.dispatch( new ShoppingListActions.AddIngredient(newIngredient) );    // Adding Ingredient with Store


    }
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
    this.store.dispatch( new ShoppingListActions.stopEdit());
  }

  onDelete() {
    // this.slService.deleteIngredient(this.editedItemIndex);
    this.store.dispatch(new ShoppingListActions.deleteIngredient());
    this.onClear();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.store.dispatch( new ShoppingListActions.stopEdit());

  }

}
