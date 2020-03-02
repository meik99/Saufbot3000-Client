import {Beverage} from './Beverage';

export class Pump {
  private _id = 0;
  private _colors = [];
  private _beverage = 0;
  private _pin = 0;

  constructor(args?: {
    id?: number,
    colors?: string[],
    beverage?: number,
    pin?: number
  }) {
    if (args) {
      if (args.id) {
         this.id = args.id;
      }
      if (args.colors) {
        this.colors = args.colors;
      }
      if (args.beverage) {
        this.beverage = args.beverage;
      }
      if (args.pin) {
        this.pin = args.pin;
      }
    }
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get colors(): any[] {
    return this._colors;
  }

  set colors(value: any[]) {
    this._colors = value;
  }

  get beverage(): any {
    return this._beverage;
  }

  set beverage(value: any) {
    this._beverage = value;
  }

  get pin(): number {
    return this._pin;
  }

  set pin(value: number) {
    this._pin = value;
  }
}
