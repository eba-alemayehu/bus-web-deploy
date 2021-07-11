import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutesTableComponent } from './routes-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';



@NgModule({
  declarations: [RoutesTableComponent],
  exports: [
    RoutesTableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class RoutesTableModule { }
