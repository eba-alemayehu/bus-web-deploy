import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map, shareReplay, tap} from 'rxjs/operators';
import {UserCreateAnonimusUserGQL} from './generated/graphql';
import {StorageService} from './core/service/storage.service';
import {AuthGuard} from './guards/auth/auth.guard';
import {echo} from './util/print';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit{
  @ViewChild('drawer') drawer;
  title = 'busWeb';

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private createAnonymousUserGQL: UserCreateAnonimusUserGQL,
    private authGuard: AuthGuard,
    private storage: StorageService) {
  }
  async ngOnInit(): Promise<void> {
    if (!this.authGuard.canActivate(null, null)){
      await this.createAnonymousUserGQL.mutate({input: {}}).pipe(
        tap(({data}) => (data.createAnonymousUser.user !== null) ?
          this.storage.setToken(data.createAnonymousUser.token, data.createAnonymousUser.refreshToken) : throwError('Invalid username or password'))
      ).toPromise();
    }
  }
  ngAfterViewInit(): void {
  }
}
