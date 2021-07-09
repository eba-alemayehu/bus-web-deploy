import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditTripFormComponent } from './edit-trip-form.component';
import {FlexModule} from '@angular/flex-layout';
import {TripFormModule} from '../trip-form/trip-form.module';



@NgModule({
    declarations: [EditTripFormComponent],
    exports: [
        EditTripFormComponent
    ],
    imports: [
        CommonModule,
        FlexModule,
        TripFormModule
    ]
})
export class EditTripFormModule { }
