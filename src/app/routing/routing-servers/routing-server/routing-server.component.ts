import { Component, OnInit } from '@angular/core';
import { ServesService } from '../serves.service';

@Component({
  selector: 'app-routing-server',
  templateUrl: './routing-server.component.html',
  styleUrls: ['./routing-server.component.scss'],
})
export class RoutingServerComponent implements OnInit {
  server: { id: number; name: string; status: string };

  constructor(private servesService: ServesService) {}

  ngOnInit() {
    this.server = this.servesService.getServer(1);
  }
}
