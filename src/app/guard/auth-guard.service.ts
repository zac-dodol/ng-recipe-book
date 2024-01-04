import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {}

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    try {
      const authenticated = await this.authService.isAuthenticated();
      if (typeof authenticated === 'boolean' && authenticated == true) {
        return authenticated;
      } else {
        // Handle the case where isAuthenticated doesn't return a boolean
        console.error('Unexpected type returned by isAuthenticated');
        this.router.navigate(['not-allowed']);
        return false;
      }
    } catch (error) {
      console.error('Error during authentication check:', error);
      // Handle the error, you might want to redirect to an error page or handle it in another way.
      return false;
    }
  }

  async canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    return this.canActivate(next, state);
  }
}

export const AuthGuard: CanActivateFn = async (
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Promise<boolean> => {
  const authService = new AuthService(); // Instantiate the service
  try {
    const authenticated = await authService.isAuthenticated();
    if (typeof authenticated === 'boolean') {
      return authenticated;
    } else {
      // Handle the case where isAuthenticated doesn't return a boolean
      console.error('Unexpected type returned by isAuthenticated');
      return false;
    }
  } catch (error) {
    console.error('Error during authentication check:', error);
    // Handle the error, you might want to redirect to an error page or handle it in another way.
    return false;
  }
};
