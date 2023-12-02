import { Component, OnInit } from '@angular/core';
import { ServesService } from './serves.service';

@Component({
  selector: 'app-routing-servers',
  templateUrl: './routing-servers.component.html',
  styleUrls: ['./routing-servers.component.scss'],
})
export class RoutingServersComponent implements OnInit {
  public servers: { id: number; name: string; status: string }[] = [];

  constructor(private servesService: ServesService) {}

  ngOnInit() {
    this.servers = this.servesService.getServers();
  }
}
