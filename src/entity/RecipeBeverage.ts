export class RecipeBeverage {
  private _id = 0;
  private _recipeId = 0;
  private _beverageId = 0;
  private _milliliters = 0; // in milli

  constructor(args?: {
    id?: number,
    recipeId?: number,
    beverageId?: number,
    milliliters?: number
  }) {
    if (args) {
       if (args.id) {
         this.id = args.id;
       }
       if (args.recipeId) {
         this.recipeId = args.recipeId;
       }
       if (args.beverageId) {
         this.beverageId = args.beverageId;
       }
       if (args.milliliters) {
         this.milliliters = args.milliliters;
       }
    }
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get recipeId(): number {
    return this._recipeId;
  }

  set recipeId(value: number) {
    this._recipeId = value;
  }

  get beverageId(): number {
    return this._beverageId;
  }

  set beverageId(value: number) {
    this._beverageId = value;
  }

  get milliliters(): number {
    return this._milliliters;
  }

  set milliliters(value: number) {
    this._milliliters = value;
  }
}
