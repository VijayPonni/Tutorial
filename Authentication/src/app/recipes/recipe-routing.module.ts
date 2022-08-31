import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGauard } from "../auth/auth.guard";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipesResolverService } from "./recipes-resolver.service";
import { RecipesComponent } from "./recipes.component";


const recipeRoutes : Routes = [
    {
        path: '',
        component: RecipesComponent,
        canActivate : [AuthGauard] ,
        children: [
          { path: '', component: RecipeStartComponent },
          { path: 'new', component: RecipeEditComponent },
          {
            path: ':id',
            component: RecipeDetailComponent,
            resolve: [RecipesResolverService]
          },
          {
            path: ':id/edit',
            component: RecipeEditComponent,
            resolve: [RecipesResolverService]
          }
        ]
      },
]

@NgModule({
 imports : [ RouterModule.forChild(recipeRoutes) ] ,
 exports : [ RouterModule ]
})

export class RecipeRoutingModule {

}