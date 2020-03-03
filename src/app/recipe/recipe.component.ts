import {Component, EventEmitter, OnInit} from '@angular/core';
import {Recipe} from '../../entity/Recipe';
import {RecipeBeverage} from '../../entity/RecipeBeverage';
import {RecipeService} from '../service/recipe/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  recipes: Recipe[] = [];
  ingredients: RecipeBeverage[] = [];
  selectedRecipe = null;
  onShowModal = new EventEmitter();

  constructor(
    private _recipeService: RecipeService
  ) { }

  ngOnInit(): void {
    this._recipeService.findAll()
      .then(result => {
        this.recipes = result.sort((a, b) => a.id - b.id);
      });
  }

  updateRecipe(recipe: Recipe) {
    this._recipeService.update(recipe)
      .catch(err => console.log(err));
  }

  removeRecipe(recipe: Recipe) {
    this._recipeService.remove(recipe)
      .then(result => {
        this.recipes = this.recipes.filter(item => item.id !== recipe.id);
      })
      .catch(err => console.log(err));
  }

  addRecipe() {
    this._recipeService.insert()
      .then(result => {
        this.recipes = this.recipes.concat(result).sort((a, b) => a.id - b.id);
      })
      .catch(err => console.log(err));
  }

  selectRecipe(recipe: Recipe) {
    this.selectedRecipe = recipe;
    this.onShowModal.emit();
  }
}
