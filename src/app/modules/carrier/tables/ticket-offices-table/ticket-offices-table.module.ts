import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketOfficesTableComponent } from './ticket-offices-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';



@NgModule({
    declarations: [TicketOfficesTableComponent],
    exports: [
        TicketOfficesTableComponent
    ],
    imports: [
        CommonModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule
    ]
})
export class TicketOfficesTableModule { }
