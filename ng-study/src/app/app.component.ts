import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-study-project';

  constructor(private router: Router) {}

  isRecipePage() {
    return this.router.url === '/recipe-page';
  }
}
