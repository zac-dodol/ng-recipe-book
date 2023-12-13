import { Component, OnInit } from '@angular/core';
import { ServesService } from '../serves.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-routing-server',
  templateUrl: './routing-server.component.html',
  styleUrls: ['./routing-server.component.scss'],
})
export class RoutingServerComponent implements OnInit {
  server: { id: number; name: string; status: string };

  constructor(
    private servesService: ServesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // 1st method (simpler)
    const id = +this.route.snapshot.params['id'];
    this.server = this.servesService.getServer(id);
    this.route.params.subscribe((params: Params) => {
      this.server = this.servesService.getServer(+params['id']);
    });

    // 2nd method (more specific)
    // this.route.params.subscribe((params: Params) => {
    //   // Use the '+' operator to convert the parameter to a number
    //   this.server = {
    //     id: +params['id'],
    //     name: '',
    //     status: '',
    //   };

    //   // Now you can use this.server.id to perform any actions with the ID
    //   this.server = this.servesService.getServer(this.server.id);
    // });
  }

  onEdit() {
    this.router.navigate(['edit'], {
      relativeTo: this.route,
      queryParamsHandling: 'preserve',
    });
  }
}
