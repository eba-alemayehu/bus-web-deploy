import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripsTableComponent } from './trips-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatButtonModule} from "@angular/material/button";
import {LangModule} from '../../../../lang.module';
import {NotFoundModule} from '../../../common/not-found/not-found.module';
import {TableShimmerModule} from '../../../common/table-shimmer/table-shimmer.module';



@NgModule({
    declarations: [TripsTableComponent],
    exports: [
        TripsTableComponent
    ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    LangModule,
    NotFoundModule,
    TableShimmerModule
  ]
})
export class TripsTableModule { }
