import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Beverage} from '../../../entity/Beverage';
import {environment} from '../../../environments/environment';
import {BeverageParser} from '../../../parser/BeverageParser';

@Injectable({
  providedIn: 'root'
})
export class BeverageRepositoryService {
  private _url = `${environment.api_url}beverage`;

  constructor(
    private _http: HttpClient
  ) { }

  findAll(): Promise<Beverage[]> {
    return new Promise<Beverage[]>((resolve, reject) => {
      this._http.get(this._url)
        .subscribe(
          response => {
            resolve(new BeverageParser().manyFromJSON(response));
          },
          error => {
            reject(error);
          }
        );
    });
  }

  insert(beverage: Beverage): Promise<Beverage> {
    return new Promise<Beverage>((resolve, reject) => {
      this._http.post(this._url, new BeverageParser().toJSON(beverage))
        .subscribe(
          response => {
            resolve(new BeverageParser().fromJSON(response));
          },
          error => {
            reject(error);
          }
        );
    });
  }

  delete(id: number): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this._http.delete(`${this._url}/${id}`)
        .subscribe(
          response => {
            resolve(response);
          },
          err => {
            reject(err);
          }
        );
    });
  }

  update(beverage: Beverage): Promise<Beverage> {
    return new Promise<Beverage>((resolve, reject) => {
      this._http.put(this._url, new BeverageParser().toJSON(beverage))
        .subscribe(
          response => {
            resolve(new BeverageParser().fromJSON(response));
          },
          err => {
            reject(err);
          }
        );
    });
  }
}
