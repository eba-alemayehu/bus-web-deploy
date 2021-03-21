import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripDriverOrAssistantAddDialogComponent } from './trip-driver-or-assistant-add-dialog.component';
import {TripDriverOrAssistantAddFormModule} from '../../forms/trip-driver-or-assistant-add-form/trip-driver-or-assistant-add-form.module';



@NgModule({
  declarations: [TripDriverOrAssistantAddDialogComponent],
    imports: [
        CommonModule,
        TripDriverOrAssistantAddFormModule
    ]
})
export class TripDriverOrAssistantAddDialogModule { }
