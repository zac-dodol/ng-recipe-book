import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
} from '@angular/router';

export interface CanComponentDeactivate {
  canDeactivate: () => Promise<boolean>;
}

export class CanDeactivateGuardService
  implements CanDeactivate<CanComponentDeactivate>
{
  constructor() {}

  canDeactivate(
    component: CanComponentDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): Promise<boolean> {
    return component.canDeactivate();
  }
}
