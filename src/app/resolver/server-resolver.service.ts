import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ServesService } from '../routing/routing-servers/serves.service';
import { Injectable } from '@angular/core';

interface Server {
  id: number;
  name: string;
  status: string;
}

@Injectable({
  providedIn: 'root',
})
export class ServerResolverService implements Resolve<Server> {
  constructor(private serversService: ServesService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Server | Observable<Server> | Promise<Server> {
    return this.serversService.getServer(+route.params['id']);
  }
}
