import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusFormComponent } from './bus-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FlexModule} from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {BusSeatConfigurationModule} from '../../component/bus-seat-configuration/bus-seat-configuration.module';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {LangModule} from '../../../../lang.module';



@NgModule({
    declarations: [BusFormComponent],
    exports: [
        BusFormComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FlexModule,
        MatFormFieldModule,
        MatInputModule,
        BusSeatConfigurationModule,
        MatButtonModule,
        MatCardModule,
        LangModule
    ]
})
export class BusFormModule { }
