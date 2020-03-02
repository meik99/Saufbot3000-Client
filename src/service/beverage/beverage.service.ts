import { Injectable } from '@angular/core';
import {Beverage} from '../../entity/Beverage';
import {BeverageRepositoryService} from './beverage-repository.service';

@Injectable({
  providedIn: 'root'
})
export class BeverageService {

  constructor(
    private _beverageRepository: BeverageRepositoryService
  ) { }

  findAll(): Promise<Beverage[]> {
    return this._beverageRepository.findAll();
  }

  insert(beverage: Beverage): Promise<Beverage> {
    return this._beverageRepository.insert(beverage);
  }

  delete(id: number): Promise<any> {
    return this._beverageRepository.delete(id);
  }

  update(beverage: Beverage): Promise<Beverage> {
    return this._beverageRepository.update(beverage);
  }
}
