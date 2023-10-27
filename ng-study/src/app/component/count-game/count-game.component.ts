import { Component } from '@angular/core';

@Component({
  selector: 'app-count-game',
  templateUrl: './count-game.component.html',
  styleUrls: ['./count-game.component.scss'],
})
export class CountGameComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onIntervalFired(firedNumber: number) {
    if (firedNumber % 2 === 0) {
      this.evenNumbers.push(firedNumber);
    } else {
      this.oddNumbers.push(firedNumber);
    }
  }
}
