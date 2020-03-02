import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BeverageComponent} from './beverage/beverage.component';
import {PumpComponent} from './pump/pump.component';

const routes: Routes = [
  {
    path: "",
    component: BeverageComponent
  },
  {
    path: "beverage",
    component: BeverageComponent
  },
  {
    path: "pump",
    component: PumpComponent
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
