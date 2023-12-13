import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routing-home',
  templateUrl: './routing-home.component.html',
  styleUrls: ['./routing-home.component.scss'],
})
export class RoutingHomeComponent {
  constructor(private router: Router) {}

  onLoadServer(id: number) {
    // complex functions and calculation

    // programatically navigate to a url
    // this.router.navigate(['/routing-pagination/routing-servers']);

    // navigate to specific url with query and fragment
    this.router.navigate(
      ['/routing-pagination', 'routing-servers', id, 'edit'],
      { queryParams: { allowEdit: '1' }, fragment: 'loading' }
    );
  }
}
