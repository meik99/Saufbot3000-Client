import { Injectable } from '@angular/core';
import {Pump} from '../../../entity/Pump';
import {Beverage} from '../../../entity/Beverage';

const pumps = [
  new Pump({
    id: 1,
    colors: ["black", "black"],
    beverage: 1,
    pin: 14
  }),
  new Pump({
    id: 2,
    colors: ["black", "red"],
    beverage: 2,
    pin: 7
  }),
  new Pump({
    id: 3,
    colors: ["black", "green"],
    beverage: 0
  }),
  new Pump({
    id: 4,
    colors: ["black", "blue"],
    beverage: 0
  }),
  new Pump({
    id: 5,
    colors: ["black", "yellow"],
    beverage: 0
  }),
  new Pump({
    id: 6,
    colors: ["white", "white"],
    beverage: 0
  }),
  new Pump({
    id: 7,
    colors: ["white", "yellow"],
    beverage: 0
  }),
  new Pump({
    id: 8,
    colors: ["white", "green"],
    beverage: 0
  })
];

@Injectable({
  providedIn: 'root'
})
export class MockPumpRepositoryService {

  constructor() { }

  findAll(): Promise<Pump[]> {
    return new Promise<Pump[]>(resolve => resolve(pumps));
  }

  update(pump: Pump): Promise<Pump> {
    return new Promise<Pump>(resolve => {
      const p = pumps.find(item => item.id === pump.id);

      if (p) {
        p.beverage = pump.beverage;
        resolve(p);
      }

      resolve(null);
    });
  }
}
