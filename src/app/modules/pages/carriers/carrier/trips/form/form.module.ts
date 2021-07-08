import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import {TripFormModule} from '../../../../../trip/forms/trip-form/trip-form.module';
import {MatCardModule} from '@angular/material/card';
import {LangModule} from '../../../../../../lang.module';


@NgModule({
  declarations: [FormComponent],
    imports: [
        CommonModule,
        FormRoutingModule,
        TripFormModule,
        MatCardModule,
        LangModule
    ]
})
export class FormModule { }
