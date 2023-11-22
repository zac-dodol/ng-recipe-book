import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private router: Router) {}

  get isHomeRoute(): boolean {
    return this.router.url === '/';
  }

  get isRecipeRoute(): boolean {
    return this.router.url === '/recipe-page';
  }

  get isOtherRoute(): boolean {
    return this.router.url !== '/recipe-page' && this.router.url !== '/';
  }
}
