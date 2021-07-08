import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusesTableComponent } from './buses-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';



@NgModule({
  declarations: [BusesTableComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class BusesTableModule { }
