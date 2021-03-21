import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectBusDialogComponent } from './select-bus-dialog.component';
import {BusListModule} from '../../list/bus-list/bus-list.module';



@NgModule({
  declarations: [SelectBusDialogComponent],
    imports: [
        CommonModule,
        BusListModule
    ]
})
export class SelectBusDialogModule { }
