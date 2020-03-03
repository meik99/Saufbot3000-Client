import {Recipe} from '../entity/Recipe';

export class RecipeParser {
  constructor() {
  }

  fromJSON(json: any): Recipe {
    if (!json) {
      return null;
    }

    return new Recipe(json);
  }

  manyFromJSON(json: any): Recipe[] {
    if (!json && !json.length) {
      return [];
    }

    const result = [];

    json.forEach(beverage => {
      result.push(this.fromJSON(beverage));
    });

    return result;
  }

  toJSON(beverage: Recipe): any {
    return {
      id: beverage.id,
      name: beverage.name
    };
  }
}
