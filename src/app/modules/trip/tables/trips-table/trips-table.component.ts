import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTable} from '@angular/material/table';
import {TripsTableDataSource} from './trips-table-datasource';
import {TripsGQL} from '../../../../generated/graphql';
import {map} from 'rxjs/operators';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-trips-table',
  templateUrl: './trips-table.component.html',
  styleUrls: ['./trips-table.component.scss']
})
export class TripsTableComponent implements AfterViewInit, OnInit {
  @Input() carrier;
  @Input() bulkRef;
  @Input() leavingFrom;
  @Input() destination;
  @Input() departureTime;
  @Input() departureTimeGte;
  @Input() departureTimeLte;

  fileName = 'trip_list.xlsx';

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<any>;
  dataSource: TripsTableDataSource;
  trips = [];

  @Input() displayedColumns = ['carrier', 'departureTime', 'leavingFrom', 'destination'];

  constructor(private tripsGql: TripsGQL) {
  }

  ngOnInit(): void {
    this.tripsGql.watch({
      carrier: this.carrier,
      departureTime: this.departureTime,
      departureTime_Gte: this.departureTimeGte,
      departureTime_Lte: this.departureTimeLte,
      bulkRef: this.bulkRef,
      leavingFrom: this.leavingFrom,
      destination: this.destination,
    }).valueChanges.pipe(
      map(response => response.data.trips.edges)
    ).subscribe(trips => {
      this.trips = trips.map(e => e.node);;
      this.setTipsData();
    });
    this.setTipsData();
  }

  setTipsData(): void {
    this.dataSource = new TripsTableDataSource(this.trips);
    this.ngAfterViewInit();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  generateReport(): void {
    /* pass here the table id */
    const element = document.getElementById('trip-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);
  }
}
