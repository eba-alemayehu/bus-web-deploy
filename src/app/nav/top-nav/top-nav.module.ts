import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './top-nav.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {ProfilePicModule} from '../../modules/account/profile-pic/profile-pic.module';
import {FlexModule} from '@angular/flex-layout';
import {MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import {AuthenticationDialogModule} from '../../modules/account/dialogs/authentication-dialog/authentication-dialog.module';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import {RouterModule} from '@angular/router';



@NgModule({
    declarations: [TopNavComponent],
    exports: [
        TopNavComponent
    ],
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        ProfilePicModule,
        FlexModule,
        AuthenticationDialogModule,
        MatSnackBarModule,
        RouterModule,
    ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ]
})
export class TopNavModule { }
