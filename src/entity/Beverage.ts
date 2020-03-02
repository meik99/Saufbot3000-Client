export class Beverage {
  private _id = 0;
  private _name = "";

  constructor(args?: {
    id?: number,
    name?: string
  }) {
    if (args) {
      if (args.id) {
        this.id = args.id;
      }
      if (args.name) {
        this.name = args.name;
      }
    }
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
}
