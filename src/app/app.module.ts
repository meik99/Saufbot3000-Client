import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import { BeverageComponent } from './beverage/beverage.component';
import {HttpClientModule} from '@angular/common/http';
import { PumpComponent } from './pump/pump.component';

@NgModule({
  declarations: [
    AppComponent,
    BeverageComponent,
    PumpComponent
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
