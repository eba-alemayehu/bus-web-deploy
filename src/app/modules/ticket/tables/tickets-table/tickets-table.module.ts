import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketsTableComponent } from './tickets-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {FlexModule} from "@angular/flex-layout";
import {FilterFormModule} from "../../../trip/forms/filter-form/filter-form.module";
import {MatDividerModule} from "@angular/material/divider";
import {LangModule} from '../../../../lang.module';
import {NotFoundModule} from '../../../common/not-found/not-found.module';
import {TableShimmerModule} from '../../../common/table-shimmer/table-shimmer.module';



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
    MatButtonModule,
    MatIconModule,
    FlexModule,
    FilterFormModule,
    MatDividerModule,
    LangModule,
    NotFoundModule,
    TableShimmerModule
  ]
})
export class TicketsTableModule { }
