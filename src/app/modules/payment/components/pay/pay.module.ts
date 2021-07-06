import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PayComponent } from './pay.component';
import {MatDialogModule} from "@angular/material/dialog";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [PayComponent],
  exports: [
    PayComponent
  ],
    imports: [
        CommonModule,
        MatDialogModule,
        FlexLayoutModule,
        MatCardModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule,
        ReactiveFormsModule
    ]
})
export class PayModule { }
