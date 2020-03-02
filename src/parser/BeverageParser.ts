import {Beverage} from '../entity/Beverage';

export class BeverageParser {
  constructor() {
  }

  fromJSON(json: any): Beverage {
    if (!json) {
      return null;
    }

    return new Beverage(json);
  }

  manyFromJSON(json: any): Beverage[] {
    if (!json && !json.length) {
      return [];
    }

    const result = [];

    json.forEach(beverage => {
      result.push(this.fromJSON(beverage));
    });

    return result;
  }

  toJSON(beverage: Beverage): any {
    return {
      id: beverage.id,
      name: beverage.name
    };
  }
}
