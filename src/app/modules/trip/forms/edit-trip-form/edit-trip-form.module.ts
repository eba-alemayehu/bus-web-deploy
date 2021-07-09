import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditTripFormComponent } from './edit-trip-form.component';
import {FlexModule} from '@angular/flex-layout';



@NgModule({
    declarations: [EditTripFormComponent],
    exports: [
        EditTripFormComponent
    ],
    imports: [
        CommonModule,
        FlexModule
    ]
})
export class EditTripFormModule { }
