import { Component, Input } from '@angular/core';
import { RecipeService } from '../../recipe.service';
import { Recipe } from '../../recipes.model';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.scss'],
})
export class RecipesItemComponent {
  @Input() recipeList: any;
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) {}

  onSelected() {
    this.recipeService.recipeSelected.emit(this.recipeList);
  }
}
