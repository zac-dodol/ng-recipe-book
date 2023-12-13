import { Component, OnInit } from '@angular/core';
import { ServesService } from './serves.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routing-servers',
  templateUrl: './routing-servers.component.html',
  styleUrls: ['./routing-servers.component.scss'],
})
export class RoutingServersComponent implements OnInit {
  public servers: { id: number; name: string; status: string }[] = [];

  constructor(
    private servesService: ServesService,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit() {
    this.servers = this.servesService.getServers();
  }

  reloadPage() {
    location.reload();
  }

  goBack() {
    this.location.back();
  }

  goToUsers() {
    this.router.navigate(['routing-pagination/routing-users']);
  }
}
