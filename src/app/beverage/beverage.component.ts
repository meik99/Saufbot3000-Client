import { Component, OnInit } from '@angular/core';
import {BeverageService} from '../service/beverage/beverage.service';
import {Beverage} from '../../entity/Beverage';

@Component({
  selector: 'app-beverage',
  templateUrl: './beverage.component.html',
  styleUrls: ['./beverage.component.css']
})
export class BeverageComponent implements OnInit {
  beverages: Beverage[] = [];

  constructor(
    private _beverageService: BeverageService
  ) { }

  ngOnInit(): void {
    this._beverageService.findAll()
      .then(beverages => {
        this.beverages = beverages;
      })
      .catch(err => console.log(err));
  }

  addBeverage() {
    this._beverageService.insert(new Beverage())
      .then(result => {
        this.beverages = this.beverages.concat(result);
      })
      .catch(err => console.log(err));
  }

  removeBeverage(beverage: Beverage) {
    this._beverageService.delete(beverage.id)
      .then(() => {
        this.beverages = this.beverages.filter(item => item.id !== beverage.id);
      })
      .catch(err => {
        console.log(err);
      });
  }

  updateBeverages(beverage: Beverage) {
    this._beverageService.update(beverage)
      .catch(err => {
        console.log(err);
      });
  }
}
