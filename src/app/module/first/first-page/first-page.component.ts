import { Component } from '@angular/core';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss'],
})
export class FirstPageComponent {
  receivedUsername: string = '';

  handleUsername(data: string) {
    this.receivedUsername = data;
    console.log(this.receivedUsername);
  }
}
