import { Injectable } from '@angular/core';
import {Recipe} from '../../../entity/Recipe';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BrewRepositoryService {
  private _url = `${environment.api_url}brew`;

  constructor(
    private _http: HttpClient
  ) { }


  brew(recipe: Recipe): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this._http.get(`${this._url}/${recipe.id}`)
        .subscribe(
          response => {
            resolve();
          },
          err => reject(err)
        );
    });
  }
}
