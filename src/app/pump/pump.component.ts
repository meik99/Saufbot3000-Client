import { Component, OnInit } from '@angular/core';
import {PumpService} from '../service/pump/pump.service';
import {BeverageService} from '../service/beverage/beverage.service';
import {Pump} from '../../entity/Pump';

@Component({
  selector: 'app-pump',
  templateUrl: './pump.component.html',
  styleUrls: ['./pump.component.css']
})
export class PumpComponent implements OnInit {
  pumps = [];
  beverages = [];

  constructor(
    private _pumpService: PumpService,
    private _beverageService: BeverageService
  ) { }

  ngOnInit(): void {
    this._pumpService.findAll()
      .then(result => {
        this.pumps = result;
      })
      .catch(err => console.log(err));
    this._beverageService.findAll()
      .then(result => {
        this.beverages = result;
      })
      .catch(err => console.log(err));
  }

  updatePump(pump: Pump) {
    this._pumpService.update(pump)
      .catch(err => console.log(err));
  }
}
