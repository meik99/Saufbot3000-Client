import {AfterViewInit, Component, OnInit} from '@angular/core';
import {PumpService} from '../service/pump/pump.service';
import {Pump} from '../../entity/Pump';
import {RecipeService} from '../service/recipe/recipe.service';
import {Recipe} from '../../entity/Recipe';

@Component({
  selector: 'app-brew',
  templateUrl: './brew.component.html',
  styleUrls: ['./brew.component.css']
})
export class BrewComponent implements OnInit {
  pumps: Pump[] = [];
  recipes: Recipe[] = [];

  constructor(
    private _pumpService: PumpService,
    private _recipeService: RecipeService
  ) { }

  ngOnInit(): void {
    this._pumpService.findAll()
      .then(pumps => {
        this.pumps = pumps;
        this._recipeService.findAll()
          .then(recipes => {
            this.recipes = recipes;

            recipes.forEach(recipe => {
              this._recipeService.findIngredients(recipe)
                .then(ingredients => {

                  ingredients.forEach(ingredient => {
                    const pumpWithIngredient = this.pumps.
                      find(pump => pump.beverageId === ingredient.beverageId);

                    if (!pumpWithIngredient) {
                      this.recipes = this.recipes.filter(item => item.id !== recipe.id);
                    }
                  });

                })
                .catch(err => console.log(err));
            });
          });
      })
      .catch(err => console.log(err));
  }

}
