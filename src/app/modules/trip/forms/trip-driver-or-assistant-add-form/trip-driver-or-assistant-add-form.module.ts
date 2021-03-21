import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripDriverOrAssistantAddFormComponent } from './trip-driver-or-assistant-add-form.component';
import {UserSearchFormModule} from '../../../account/forms/user-search-form/user-search-form.module';
import {UserTumbModule} from '../../../account/component/user-tumb/user-tumb.module';
import {FlexModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
    declarations: [TripDriverOrAssistantAddFormComponent],
    exports: [
        TripDriverOrAssistantAddFormComponent
    ],
  imports: [
    CommonModule,
    UserSearchFormModule,
    UserTumbModule,
    FlexModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class TripDriverOrAssistantAddFormModule { }
