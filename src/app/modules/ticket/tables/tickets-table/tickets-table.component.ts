import {AfterViewInit, Component, OnInit, ViewChild, Input} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTable} from '@angular/material/table';
import {TicketsTableDataSource} from './tickets-table-datasource';
import * as XLSX from 'xlsx';
import {TicketsGQL} from '../../../../generated/graphql';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-tickets-table',
  templateUrl: './tickets-table.component.html',
  styleUrls: ['./tickets-table.component.scss']
})
export class TicketsTableComponent implements AfterViewInit, OnInit {
  @Input() tripId;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<any>;
  @Input() fileName: string;
  dataSource: TicketsTableDataSource;
  tickets: any[] = [];
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['ticket_number', 'name', 'phone', 'seat', 'destination', 'leavingFrom'];

  constructor(private ticketsGQL: TicketsGQL) {
  }

  ngOnInit(): void {
    this.ticketsGQL.watch({
      trip: this.tripId
    }).valueChanges.pipe(map(response => response.data.tickets)).subscribe(
      (tickets) => {
        this.tickets = tickets.edges.map(e => e.node);
        this.setTicketsData();
      }
    );
    this.setTicketsData();
  }

  setTicketsData(): void {
    this.dataSource = new TicketsTableDataSource(this.tickets);
    this.ngAfterViewInit();
  }

  generateReport(): void {
    /* pass here the table id */
    const element = document.getElementById('tickets-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
