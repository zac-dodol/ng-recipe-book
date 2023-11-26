import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipes.model';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  constructor(private shoppingListService: ShoppingListService) {}

  private recipes: Recipe[] = [
    new Recipe(
      'Thai Recipe',
      'Tomyam kung',
      'https://resepichenom.com/media/ba3dc676f8c653535923388d1e5131192c4596e1.jpeg',
      [new Ingredient('Tomyam paste', 1), new Ingredient('prawns', 5)]
    ),
    new Recipe(
      'Malay Recipe',
      'Tomyam Kampung',
      'https://images.deliveryhero.io/image/fd-my/LH/dxu9-hero.jpg',
      [new Ingredient('Tomyam paste', 1), new Ingredient('anchovies', 5)]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredientFromRecipe(ingredients);
  }
}
