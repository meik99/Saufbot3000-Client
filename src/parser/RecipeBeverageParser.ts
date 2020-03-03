import {RecipeBeverage} from '../entity/RecipeBeverage';

export class RecipeBeverageParser {
  fromJSON(json: any): RecipeBeverage {
    if (!json) {
      return null;
    }

    const result = new RecipeBeverage(json);

    if (json.beverage_id) {
      result.beverageId = json.beverage_id;
    }
    if (json.recipe_id) {
      result.recipeId = json.recipe_id;
    }

    return result;
  }

  manyFromJSON(json: any): RecipeBeverage[] {
    if (!json || !json.length) {
      return [];
    }

    const result = [];

    json.forEach(item => {
      result.push(this.fromJSON(item));
    });

    return result;
  }

  toJSON(recipeBeverage: RecipeBeverage) {
    return {
      id: recipeBeverage.id,
      recipe_id: recipeBeverage.recipeId,
      beverage_id: recipeBeverage.beverageId,
      milliliters: recipeBeverage.milliliters
    };
  }
}
