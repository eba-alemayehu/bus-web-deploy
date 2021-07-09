import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CancelTripFormComponent } from './cancel-trip-form.component';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
    declarations: [CancelTripFormComponent],
    exports: [
        CancelTripFormComponent
    ],
    imports: [
        CommonModule,
        MatButtonModule
    ]
})
export class CancelTripFormModule { }
