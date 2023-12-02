import { Component } from '@angular/core';

@Component({
  selector: 'app-routing-users',
  templateUrl: './routing-users.component.html',
  styleUrls: ['./routing-users.component.scss'],
})
export class RoutingUsersComponent {
  users = [
    {
      id: 1,
      name: 'Max',
    },
    {
      id: 2,
      name: 'Anna',
    },
    {
      id: 3,
      name: 'Chris',
    },
  ];
}
