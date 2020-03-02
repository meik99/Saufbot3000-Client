import { Injectable } from '@angular/core';
import {Beverage} from '../../../entity/Beverage';

let beverages = [
  new Beverage({id: 1, name: "Wasser"}),
  new Beverage({id: 2, name: "Cola"}),
  new Beverage({id: 3, name: "Fanta"}),
  new Beverage({id: 4, name: "Whisky"}),
  new Beverage({id: 5, name: "Vodka"}),
  new Beverage({id: 6, name: "Bier"}),
];

@Injectable({
  providedIn: 'root'
})
export class MockBeverageRepositoryService {


  constructor() { }

  findAll(): Promise<Beverage[]> {
    return new Promise<Beverage[]>(resolve => resolve(beverages));
  }

  insert(beverage: Beverage): Promise<Beverage> {
    return new Promise<Beverage>(resolve => {
      const sorted = beverages.sort((a, b) => b.id - a.id);
      let id = 1;

      if (sorted.length > 0) {
        id = sorted[0].id + 1;
      }

      beverage.id = id;
      beverages.push(beverage);
      resolve(beverage);
    });
  }

  delete(id: number): Promise<any> {
    return new Promise<any>((resolve) => {
      beverages = beverages.filter(item => item.id !== id);
      resolve();
    });
  }

  update(beverage: Beverage): Promise<Beverage> {
    return new Promise<Beverage>(resolve => {
      const result = beverages.find(item => item.id === beverage.id);

      if (result) {
        result.name = beverage.name;
      }

      resolve(result);
    });
  }
}
