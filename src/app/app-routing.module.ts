import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BeverageComponent} from './beverage/beverage.component';
import {PumpComponent} from './pump/pump.component';
import {RecipeComponent} from './recipe/recipe.component';
import {BrewComponent} from './brew/brew.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "beverage",
    pathMatch: "full"
  },
  {
    path: "beverage",
    component: BeverageComponent
  },
  {
    path: "pump",
    component: PumpComponent
  },
  {
    path: "recipe",
    component: RecipeComponent
  },
  {
    path: "brew",
    component: BrewComponent
  }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
