import { Injectable } from '@angular/core';
import {Recipe} from '../../../entity/Recipe';
import {RecipeBeverage} from '../../../entity/RecipeBeverage';

let recipes = [
  new Recipe({ id: 1, name: "Cola-Whisky"}),
  new Recipe( { id: 2, name: "Wasser" })
];

let recipeBeverage = [
  new RecipeBeverage({
    id: 1,
    recipeId: 1,
    beverageId: 2,
    milliliters: 130
  }),
  new RecipeBeverage({
    id: 2,
    recipeId: 1,
    beverageId: 4,
    milliliters: 20
  }),
  new RecipeBeverage({
    id: 3,
    recipeId: 2,
    beverageId: 1,
    milliliters: 150
  })
];

@Injectable({
  providedIn: 'root'
})
export class MockRecipeRepositoryService {

  constructor() { }

  findAll(): Promise<Recipe[]> {
    return new Promise<Recipe[]>(resolve => {
      resolve(recipes);
    });
  }

  findIngredients(recipe: Recipe): Promise<RecipeBeverage[]> {
    return new Promise<RecipeBeverage[]>(resolve => {
      const result = recipeBeverage.filter(item => item.recipeId === recipe.id);
      resolve(result);
    });
  }

  updateIngredient(ingredient: RecipeBeverage): Promise<RecipeBeverage> {
    return new Promise<RecipeBeverage>(resolve => {
      const entity = recipeBeverage.find(item => item.id === ingredient.id);
      entity.recipeId = ingredient.recipeId;
      entity.beverageId = ingredient.beverageId;
      entity.milliliters = ingredient.milliliters;
      resolve(entity);
    });
  }

  removeIngredient(ingredient: RecipeBeverage): Promise<any> {
    return new Promise<any>(resolve => {
      recipeBeverage = recipeBeverage.filter(item => item.id !== ingredient.id);
      resolve();
    });
  }

  insertIngredient(recipe: Recipe): Promise<RecipeBeverage> {
    return new Promise<RecipeBeverage>(resolve => {
      let id = 1;

      if (recipeBeverage.length > 0) {
        id = recipeBeverage.sort((a, b) => b.id - a.id)[0].id + 1;
      }

      const result = new RecipeBeverage({id, recipeId: recipe.id});
      recipeBeverage = recipeBeverage.concat(result);
      resolve(result);
    });
  }

  insert(): Promise<Recipe> {
    return new Promise<Recipe>(resolve => {
      let id = 1;

      if (recipes.length > 0) {
        id = recipes.sort((a, b) => b.id - a.id)[0].id + 1;
      }

      const result = new Recipe({id});
      recipes = recipes.concat(result);
      resolve(result);
    });
  }

  remove(recipe: Recipe): Promise<any> {
    return new Promise<any>(resolve => {
      recipes = recipes.filter(item => item.id !== recipe.id);
      resolve();
    });
  }

  update(recipe: Recipe): Promise<Recipe> {
    return new Promise<Recipe>(resolve => {
      const result = recipes.find(item => item.id === recipe.id);

      if (result) {
        result.name = recipe.name;
      }

      resolve(result);
    });
  }
}
