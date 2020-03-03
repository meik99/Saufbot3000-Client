import { Injectable } from '@angular/core';
import {Recipe} from '../../../entity/Recipe';
import {MockRecipeRepositoryService} from './mock-recipe-repository.service';
import {RecipeBeverage} from '../../../entity/RecipeBeverage';
import {RecipeRepositoryService} from './recipe-repository.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(
    private _recipeRepository: RecipeRepositoryService
  ) { }

  findAll(): Promise<Recipe[]> {
    return this._recipeRepository.findAll();
  }
  findIngredients(recipe: Recipe): Promise<RecipeBeverage[]> {
    return this._recipeRepository.findIngredients(recipe);
  }

  updateIngredient(ingredient: RecipeBeverage): Promise<RecipeBeverage> {
    return this._recipeRepository.updateIngredient(ingredient);
  }

  removeIngredient(ingredient: RecipeBeverage): Promise<any> {
    return this._recipeRepository.removeIngredient(ingredient);
  }

  insertIngredient(recipe: Recipe): Promise<RecipeBeverage> {
    return this._recipeRepository.insertIngredient(recipe);
  }

  insert(): Promise<Recipe> {
    return this._recipeRepository.insert();
  }

  remove(recipe: Recipe): Promise<any> {
    return this._recipeRepository.remove(recipe);
  }

  update(recipe: Recipe): Promise<Recipe> {
    return this._recipeRepository.update(recipe);
  }
}
