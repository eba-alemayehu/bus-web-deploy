import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationDialogComponent } from './authentication-dialog.component';
import {FlexModule} from '@angular/flex-layout';
import {MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import {LoginFormModule} from '../../forms/login-form/login-form.module';
import {LoginFormComponent} from '../../forms/login-form/login-form.component';
import {SignupFormModule} from '../../forms/signup-form/signup-form.module';
import {AuthenticationModule} from '../../component/authentication/authentication.module';


@NgModule({
  declarations: [AuthenticationDialogComponent],
    imports: [
        CommonModule,
        FlexModule,
        LoginFormModule,
        SignupFormModule,
        AuthenticationModule,
    ],
  bootstrap: [LoginFormComponent],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ]
})
export class AuthenticationDialogModule { }
