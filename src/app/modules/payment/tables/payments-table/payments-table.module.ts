import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PaymentsTableComponent} from './payments-table.component';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';



@NgModule({
  declarations: [PaymentsTableComponent],
  exports: [PaymentsTableComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule
  ]
})
export class PaymentsTableModule { }
