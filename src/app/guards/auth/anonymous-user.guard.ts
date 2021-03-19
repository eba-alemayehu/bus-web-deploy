import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import {ANONYMOUS_USER} from '../../config/role.config.js';
import {AuthService} from '../../modules/account/service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AnonymousUserGuard implements CanActivate {
  constructor(private auth: AuthService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.auth.roles().indexOf(ANONYMOUS_USER) !== -1;
  }
}
