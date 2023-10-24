import { Component } from '@angular/core';

@Component({
  selector: 'app-first-page-input-form',
  templateUrl: './first-page-input-form.component.html',
  styleUrls: ['./first-page-input-form.component.scss'],
})
export class FirstPageInputFormComponent {
  inputValue: string = '';

  onInputChange() {
    // This function is called on every input change.
    // No need to do anything specific here as ngModel handles the updates.
  }

  resetInput() {
    // This function is called when the Reset button is clicked.
    this.inputValue = '';
  }
}
