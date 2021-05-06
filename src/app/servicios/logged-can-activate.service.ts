import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

class Permissions {
  canActivate(authService: AuthService): boolean {
    return true;
  }
}

@Injectable({
  providedIn: 'root'
})
export class LoggedCanActivateService {

  constructor(private authService: AuthService) {}

  canActivate() {
    return this.authService.isLoggedIn;
  }

}
