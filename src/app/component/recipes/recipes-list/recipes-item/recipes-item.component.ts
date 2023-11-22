import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.scss'],
})
export class RecipesItemComponent {
  @Input() recipeList: any;
  @Output() recipeSelected = new EventEmitter<void>();

  onSelected() {
    this.recipeSelected.emit();
  }
}
