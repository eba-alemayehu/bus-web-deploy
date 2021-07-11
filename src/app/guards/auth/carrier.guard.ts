import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from '../../modules/account/service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CarrierGuard implements CanActivate {
  constructor(private authService: AuthService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const carrier = this.authService.carriers();
    if (carrier) {
      const carriers = carrier.filter(e => e === route.params.id);
      return carriers.length !== 0;
    }
    return false;
  }

}
