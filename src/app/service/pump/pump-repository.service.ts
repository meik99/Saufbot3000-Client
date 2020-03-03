import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Pump} from '../../../entity/Pump';
import {PumpParser} from '../../../parser/PumpParser';

@Injectable({
  providedIn: 'root'
})
export class PumpRepositoryService {
  private _url = `${environment.api_url}pump`;

  constructor(
    private _http: HttpClient
  ) { }


  findAll(): Promise<Pump[]> {
    return new Promise<Pump[]>((resolve, reject) => {
      this._http.get(this._url)
        .subscribe(
          response => {
            resolve(new PumpParser().manyFromJSON(response));
          },
          err => {
            reject(err);
          }
        );
    });
  }

  update(pump: Pump): Promise<Pump> {
    return new Promise<Pump>((resolve, reject) => {
      this._http.put(this._url, new PumpParser().toJSON(pump))
        .subscribe(
          response => {
            resolve(new PumpParser().fromJSON(response));
          },
          err => {
            reject(err);
          }
        );
    });
  }
}
