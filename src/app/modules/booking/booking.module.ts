import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMatIntlTelInputModule } from 'ngx-mat-intl-tel-input';
import { PassengerInfoPreviewComponent } from './passenger-info-preview/passenger-info-preview.component';
import {FlexModule} from '@angular/flex-layout';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {RouterModule} from '@angular/router';
import {LangModule} from '../../lang.module';


@NgModule({
  declarations: [PassengerInfoPreviewComponent],
  exports: [
    PassengerInfoPreviewComponent
  ],
    imports: [
        NgxMatIntlTelInputModule,
        CommonModule,
        FlexModule,
        MatDialogModule,
        MatButtonModule,
        RouterModule,
        LangModule
    ]
})
export class BookingModule { }
