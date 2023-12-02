import { Component, OnInit } from '@angular/core';
import { ServesService } from '../serves.service';

@Component({
  selector: 'app-routing-edit-server',
  templateUrl: './routing-edit-server.component.html',
  styleUrls: ['./routing-edit-server.component.scss'],
})
export class RoutingEditServerComponent implements OnInit {
  server: { id: number; name: string; status: string };
  serverName = '';
  serverStatus = '';

  constructor(private servesService: ServesService) {}

  ngOnInit() {
    this.server = this.servesService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.servesService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus,
    });
  }
}
