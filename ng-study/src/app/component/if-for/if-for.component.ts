import { Component } from '@angular/core';

@Component({
  selector: 'app-if-for',
  templateUrl: './if-for.component.html',
  styleUrls: ['./if-for.component.scss'],
})
export class IfForComponent {
  oddNumbers = [1, 3, 5, 7];
  evenNumbers = [2, 4, 6, 8];
  onlyOdd = false;
  value = 5;
}
