import { Component } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
})
export class RecipesListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'Thai Recipe',
      'Tomyam kung',
      'https://resepichenom.com/media/ba3dc676f8c653535923388d1e5131192c4596e1.jpeg'
    ),
    new Recipe(
      'Malay Recipe',
      'Tomyam Kampung',
      'https://resepichenom.com/media/ba3dc676f8c653535923388d1e5131192c4596e1.jpeg'
    ),
  ];
}
