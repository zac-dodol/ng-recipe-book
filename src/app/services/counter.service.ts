import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  activeToInactiveCounter = 0;
  InactiveToActiveCounter = 0;

  constructor() {}

  incrementActiveToInactive() {
    this.activeToInactiveCounter++;
    console.log(`Set to inactive counter: ${this.activeToInactiveCounter}`);
  }

  incrementInactiveToActive() {
    this.InactiveToActiveCounter++;
    console.log(`Set to active counter: ${this.InactiveToActiveCounter}`);
  }
}
