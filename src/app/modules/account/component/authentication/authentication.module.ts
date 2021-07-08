import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './authentication.component';
import {FlexModule} from '@angular/flex-layout';
import {SignupFormModule} from '../../forms/signup-form/signup-form.module';
import {LoginFormModule} from '../../forms/login-form/login-form.module';
import {MatButtonModule} from '@angular/material/button';
import {LangModule} from '../../../../lang.module';



@NgModule({
  declarations: [AuthenticationComponent],
  exports: [
    AuthenticationComponent
  ],
    imports: [
        CommonModule,
        FlexModule,
        SignupFormModule,
        LoginFormModule,
        MatButtonModule,
        LangModule
    ]
})
export class AuthenticationModule { }
