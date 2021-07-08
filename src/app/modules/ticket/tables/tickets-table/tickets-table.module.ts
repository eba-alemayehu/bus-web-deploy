import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketsTableComponent } from './tickets-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [TicketsTableComponent],
  exports: [
    TicketsTableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule
  ]
})
export class TicketsTableModule { }
