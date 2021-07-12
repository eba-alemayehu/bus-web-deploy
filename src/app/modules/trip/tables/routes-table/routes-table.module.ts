import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutesTableComponent } from './routes-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {LangModule} from '../../../../lang.module';
import {NotFoundModule} from '../../../common/not-found/not-found.module';
import {TableShimmerModule} from '../../../common/table-shimmer/table-shimmer.module';



@NgModule({
  declarations: [RoutesTableComponent],
  exports: [
    RoutesTableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    LangModule,
    NotFoundModule,
    TableShimmerModule
  ]
})
export class RoutesTableModule { }
