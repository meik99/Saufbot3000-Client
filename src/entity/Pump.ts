import {Beverage} from './Beverage';

export class Pump {
  private _id = 0;
  private _colors = [];
  private _beverageId = 0;
  private _pin = 0;

  constructor(args?: {
    id?: number,
    colors?: string[],
    beverageId?: number,
    pin?: number
  }) {
    if (args) {
      if (args.id) {
         this.id = args.id;
      }
      if (args.colors) {
        this.colors = args.colors;
      }
      if (args.beverageId) {
        this.beverageId = args.beverageId;
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

  get colors(): string[] {
    return this._colors;
  }

  set colors(value: string[]) {
    this._colors = value;
  }

  get beverageId(): number {
    return this._beverageId;
  }

  set beverageId(value: number) {
    this._beverageId = value;
  }

  get pin(): number {
    return this._pin;
  }

  set pin(value: number) {
    this._pin = value;
  }
}
