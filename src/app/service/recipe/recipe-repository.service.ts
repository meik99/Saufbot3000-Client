import { Injectable } from '@angular/core';
import {Recipe} from '../../../entity/Recipe';
import {RecipeBeverage} from '../../../entity/RecipeBeverage';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {RecipeParser} from '../../../parser/RecipeParser';
import {resolveProvidersRequiringFactory} from '@angular/compiler-cli/src/ngtsc/annotations/src/util';
import {RecipeBeverageParser} from '../../../parser/RecipeBeverageParser';

@Injectable({
  providedIn: 'root'
})
export class RecipeRepositoryService {
  private _url = `${environment.api_url}recipe`;
  private _urlBeverage = `${environment.api_url}recipe-beverage`;

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

  findIngredients(recipe: Recipe): Promise<RecipeBeverage[]> {
    return new Promise<RecipeBeverage[]>((resolve, reject) => {
      this._http.get(`${this._urlBeverage}/${recipe.id}`)
        .subscribe(
          response => {
            resolve(new RecipeBeverageParser().manyFromJSON(response));
          },
          err => {
            reject(err);
          });
    });
  }

  updateIngredient(ingredient: RecipeBeverage): Promise<RecipeBeverage> {
    return new Promise<RecipeBeverage>((resolve, reject) => {
      this._http.put(this._urlBeverage, new RecipeBeverageParser().toJSON(ingredient))
        .subscribe(
          response => {
            resolve(new RecipeBeverageParser().fromJSON(response));
          },
          err => {
            reject(err);
          });
    });
  }

  removeIngredient(ingredient: RecipeBeverage): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this._http.delete(`${this._urlBeverage}/${ingredient.id}`)
        .subscribe(
          response => {
            resolve();
          },
          err => {
            reject(err);
          });
    });
  }

  insertIngredient(recipe: Recipe): Promise<RecipeBeverage> {
    return new Promise<RecipeBeverage>((resolve, reject) => {
      this._http.post(this._urlBeverage, { recipe_id: recipe.id })
        .subscribe(
          response => {
            resolve(new RecipeBeverageParser().fromJSON(response));
          },
          err => {
            reject(err);
          });
    });
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
