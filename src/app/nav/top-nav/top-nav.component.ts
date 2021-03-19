import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AuthenticationDialogComponent} from '../../modules/account/dialogs/authentication-dialog/authentication-dialog.component';
import {AuthGuard} from '../../guards/auth/auth.guard';
import {LogoutMutationGQL, MeGQL, UserCreateAnonimusUserGQL} from '../../generated/graphql';
import {StorageService} from '../../core/service/storage.service';
import {echo} from '../../util/print';
import {RegisteredUserGuard} from '../../guards/auth/registered-user.guard';
import {Apollo} from 'apollo-angular';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  @Input() drawer;
  authUser;

  constructor(
    private matDialog: MatDialog,
    public registeredGuard: RegisteredUserGuard,
    private meGQL: MeGQL,
    private apollo: Apollo,
    private createAnonymousUserGQL: UserCreateAnonimusUserGQL,
    private logoutMutation: LogoutMutationGQL,
    private storageService: StorageService) {
  }

  ngOnInit(): void {
    this.meGQL.watch().valueChanges.subscribe(
      (response) => {
        this.authUser = response.data.me;
      }
    );
  }

  logout(): void {
    this.logoutMutation.mutate({
      input: {
        refreshToken: this.storageService.getRefreshToken()
      }
    }).subscribe(
      (response) => {
        if (response.data.revokeToken.success) {
          this.storageService.deleteToken();
          this.apollo.getClient().resetStore();
          this.createAnonymousUserGQL.mutate({input: {}}).subscribe(
            (logoutResponse) => {
              console.log(logoutResponse);
            }
          );
        }
      }
    );
  }

  login(): void {
    this.matDialog.open(AuthenticationDialogComponent, {
      width: '480px'
    });
  }
}
