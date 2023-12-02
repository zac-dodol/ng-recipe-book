import { Component } from '@angular/core';

@Component({
  selector: 'app-routing-user',
  templateUrl: './routing-user.component.html',
  styleUrls: ['./routing-user.component.scss'],
})
export class RoutingUserComponent {
  user: { id: number; name: string };
}
