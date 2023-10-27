import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.scss'],
})
export class RecipePageComponent {
  loadedFeature: 'recipe' | 'shopping';

  onSelect(feature: 'recipe' | 'shopping') {
    this.loadedFeature = feature;
  }
}
