import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {UNREGISTERED_USER_ROLE} from '../../../config/URI.config';
import {AuthService} from '../../../modules/auth/service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UnregisteredUserGuard implements CanActivate {
  constructor(private auth: AuthService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.auth.roles().indexOf(UNREGISTERED_USER_ROLE) !== -1;
  }
}
