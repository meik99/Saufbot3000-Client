import { Injectable } from '@angular/core';
import {MockBrewRepositoryService} from './mock-brew-repository.service';
import {Recipe} from '../../../entity/Recipe';
import {BrewRepositoryService} from './brew-repository.service';

@Injectable({
  providedIn: 'root'
})
export class BrewService {

  constructor(
    private _brewRepositoryServics: BrewRepositoryService
  ) { }

  brew(recipe: Recipe): Promise<any> {
    return this._brewRepositoryServics.brew(recipe);
  }
}
