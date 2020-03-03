import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import { BeverageComponent } from './beverage/beverage.component';
import {HttpClientModule} from '@angular/common/http';
import { PumpComponent } from './pump/pump.component';
import { RecipeComponent } from './recipe/recipe.component';
import { IngredientComponent } from './recipe/ingredient/ingredient.component';
import { BrewComponent } from './brew/brew.component';

@NgModule({
  declarations: [
    AppComponent,
    BeverageComponent,
    PumpComponent,
    RecipeComponent,
    IngredientComponent,
    BrewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
