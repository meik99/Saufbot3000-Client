import {Component, ElementRef, EventEmitter, Input, OnInit, ViewChild} from '@angular/core';
import {Recipe} from '../../../entity/Recipe';
import {RecipeService} from '../../service/recipe/recipe.service';
import {RecipeBeverage} from '../../../entity/RecipeBeverage';
import {Beverage} from '../../../entity/Beverage';
import {BeverageService} from '../../service/beverage/beverage.service';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {
  private _recipe: Recipe = null;
  private _onShowModal: EventEmitter<any> = null;

  ingredients: RecipeBeverage[] = [];
  beverages: Beverage[] = [];

  @ViewChild("ingredientButton", {static: false})
  button: ElementRef;

  constructor(
    private _recipeService: RecipeService,
    private _beverageService: BeverageService
  ) { }

  ngOnInit(): void {
    this._beverageService.findAll()
      .then(result => {
        this.beverages = result;
      })
      .catch(err => console.log(err));
  }

  get recipe(): Recipe {
    return this._recipe;
  }

  @Input()
  set recipe(value: Recipe) {
    this._recipe = value;

    if (this.recipe) {
      this._recipeService.findIngredients(this.recipe)
        .then(result => {
          this.ingredients = result;
        })
        .catch(err => console.log(err));
    }
  }

  get onShowModal(): EventEmitter<any> {
    return this._onShowModal;
  }

  @Input("onShow")
  set onShowModal(value: EventEmitter<any>) {
    if (this._onShowModal) {
      this._onShowModal.unsubscribe();
    }

    this._onShowModal = value;

    if (this._onShowModal) {
      this._onShowModal.subscribe(() => {
        this.button.nativeElement.click();
      });
    }
  }

  updateIngredient(ingredient: RecipeBeverage) {
    this._recipeService.updateIngredient(ingredient)
      .catch(err => console.log(err));
  }

  removeIngredient(ingredient: RecipeBeverage) {
    this._recipeService.removeIngredient(ingredient)
      .then(response => {
        this.ingredients = this.ingredients.filter(item => item.id !== ingredient.id);
      })
      .catch(err => console.log(err));
  }

  addIngredient() {
    this._recipeService.insertIngredient(this.recipe)
      .then(result => {
        this.ingredients = this.ingredients.concat(result);
      })
      .catch(err => console.log(err));
  }
}
