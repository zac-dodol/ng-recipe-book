import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
})
export class RecipesListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Thai Recipe',
      'Tomyam kung',
      'https://resepichenom.com/media/ba3dc676f8c653535923388d1e5131192c4596e1.jpeg'
    ),
    new Recipe(
      'Malay Recipe',
      'Tomyam Kampung',
      'https://images.deliveryhero.io/image/fd-my/LH/dxu9-hero.jpg'
    ),
  ];

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
