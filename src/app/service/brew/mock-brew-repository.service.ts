import { Injectable } from '@angular/core';
import {Recipe} from '../../../entity/Recipe';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MockBrewRepositoryService {
  constructor(
  ) { }

  brew(recipe: Recipe): Promise<any> {
    return new Promise<any>(resolve => resolve());
  }
}
