import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTable} from '@angular/material/table';
import {TripsTableDataSource} from './trips-table-datasource';
import {TripsGQL} from '../../../../generated/graphql';
import {map} from 'rxjs/operators';

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
}
