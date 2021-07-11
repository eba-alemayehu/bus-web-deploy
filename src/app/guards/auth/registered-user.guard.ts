import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


import {AuthService} from '../../modules/account/service/auth.service';
import {REGISTERED_USER} from '../../config/role.config.js';

@Injectable({
  providedIn: 'root'
})
export class RegisteredUserGuard implements CanActivate {
  constructor(private auth: AuthService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.auth.isRegistered();
  }

}
