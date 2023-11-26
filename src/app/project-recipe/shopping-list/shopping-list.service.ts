import { EventEmitter, Injectable, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  @Output() ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Salad', 10),
  ];

  constructor() {}

  getIngredient() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  deleteIngredient() {
    if (this.ingredients.length > 0) {
      this.ingredients.pop();
      this.ingredientsChanged.emit(this.ingredients.slice());
      console.log('delete last');
    }
  }

  addIngredientFromRecipe(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
