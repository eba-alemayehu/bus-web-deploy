import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripsTableComponent } from './trips-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatButtonModule} from "@angular/material/button";



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
        MatButtonModule
    ]
})
export class TripsTableModule { }
