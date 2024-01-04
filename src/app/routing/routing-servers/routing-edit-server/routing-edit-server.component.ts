import { Component, OnInit } from '@angular/core';
import { ServesService } from '../serves.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CanComponentDeactivate } from 'src/app/guard/can-deactivate-guard.service';

@Component({
  selector: 'app-routing-edit-server',
  templateUrl: './routing-edit-server.component.html',
  styleUrls: ['./routing-edit-server.component.scss'],
})
export class RoutingEditServerComponent
  implements OnInit, CanComponentDeactivate
{
  server: { id: number; name: string; status: string };
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changesSaved = false;

  constructor(
    private servesService: ServesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // Use paramMap to get route parameters
    const idParam = this.route.snapshot.paramMap.get('id');

    if (idParam !== null) {
      const id = +idParam;
      this.server = this.servesService.getServer(id);

      // Initialize serverName and serverStatus
      this.serverName = this.server.name;
      this.serverStatus = this.server.status;

      // Logging for demonstration purposes
      console.log(
        id,
        this.route.snapshot.queryParams,
        this.route.snapshot.fragment
      );

      // You can also subscribe to changes in queryParams and fragment
      this.route.queryParams.subscribe((queryParams) => {
        this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
        console.log('Query Params Updated:', queryParams);
      });

      this.route.fragment.subscribe((fragment) => {
        console.log('Fragment Updated:', fragment);
      });
    } else {
      console.error('ID parameter is null.');
    }
  }

  onUpdateServer() {
    // Update the server using the service
    this.servesService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus,
    });

    this.changesSaved = true;

    this.router.navigate(['../'], { relativeTo: this.route });
  }

  canDeactivate(): Promise<boolean> {
    if (!this.allowEdit) {
      return Promise.resolve(true);
    }

    if (
      (this.serverName !== this.server.name ||
        this.serverStatus !== this.server.status) &&
      !this.changesSaved
    ) {
      return Promise.resolve(confirm('Do you want to discard the changes?'));
    } else {
      return Promise.resolve(true);
    }
  }
}
