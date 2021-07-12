import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusesTableComponent } from './buses-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {NotFoundModule} from '../../../common/not-found/not-found.module';
import {LangModule} from '../../../../lang.module';
import {TableShimmerModule} from '../../../common/table-shimmer/table-shimmer.module';



@NgModule({
  declarations: [BusesTableComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    NotFoundModule,
    LangModule,
    TableShimmerModule
  ]
})
export class BusesTableModule { }
