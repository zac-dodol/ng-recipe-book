import { Component, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @ViewChild('myForm') myForm!: NgForm;

  constructor(private shoppingListService: ShoppingListService) {}

  onAddItem() {
    // if use viewchild and want to access value
    // const ingName = this.nameInputRef.nativeElement.value

    const ingName = this.myForm.value.name;
    const ingAmount = this.myForm.value.amount;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.shoppingListService.addIngredient(newIngredient);
  }

  onDeleteItem() {
    this.shoppingListService.deleteIngredient();
  }

  onResetForm() {
    this.myForm.resetForm();
  }
}
