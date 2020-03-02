import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BeverageComponent} from './beverage/beverage.component';

const routes: Routes = [
  {
    path: "",
    component: BeverageComponent
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
