import { Injectable } from '@angular/core';
import {Recipe} from '../../../entity/Recipe';
import {RecipeBeverage} from '../../../entity/RecipeBeverage';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {RecipeParser} from '../../../parser/RecipeParser';
import {resolveProvidersRequiringFactory} from '@angular/compiler-cli/src/ngtsc/annotations/src/util';

@Injectable({
  providedIn: 'root'
})
export class RecipeRepositoryService {
  private _url = `${environment.api_url}recipe`;

  constructor(
    private _http: HttpClient
  ) { }

  findAll(): Promise<Recipe[]> {
    return new Promise<Recipe[]>((resolve, reject) => {
      this._http.get(this._url)
        .subscribe(
          response => {
            resolve(new RecipeParser().manyFromJSON(response));
          },
          err => {
            reject(err);
          }
        );
    });
  }

  findIngredients(recipe: Recipe) {
    return undefined;
  }

  updateIngredient(ingredient: RecipeBeverage) {
    return undefined;
  }

  removeIngredient(ingredient: RecipeBeverage) {
    return undefined;
  }

  insertIngredient(recipe: Recipe) {
    return undefined;
  }

  insert(): Promise<Recipe> {
    return new Promise<Recipe>((resolve, reject) => {
      this._http.post(this._url, {})
        .subscribe(
          response => {
            resolve(new RecipeParser().fromJSON(response));
          },
          err => {
            reject(err);
          });
    });
  }

  remove(recipe: Recipe): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this._http.delete(`${this._url}/${recipe.id}`)
        .subscribe(
          response => {
            resolve();
          },
          err => {
            reject(err);
          });
    });
  }

  update(recipe: Recipe): Promise<Recipe> {
    return new Promise<Recipe>((resolve, reject) => {
      this._http.put(this._url, new RecipeParser().toJSON(recipe))
        .subscribe(
          response => {
            resolve(new RecipeParser().fromJSON(response));
          },
          err => {
            reject(err);
          });
    });
  }
}
