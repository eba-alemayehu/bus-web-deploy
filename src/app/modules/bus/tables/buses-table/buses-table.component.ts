import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTable} from '@angular/material/table';
import {BusesTableDataSource} from './buses-table-datasource';
import {BusesGQL} from '../../../../generated/graphql';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-buses-table',
  templateUrl: './buses-table.component.html',
  styleUrls: ['./buses-table.component.scss']
})
export class BusesTableComponent implements AfterViewInit, OnInit {
  @Input() carrier;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<any>;
  dataSource: BusesTableDataSource;
  buses = [];
  displayedColumns = ['icon', 'busNumber', 'plateNumber'];

  constructor(private busesGQL: BusesGQL) {
  }

  ngOnInit(): void {
    this.busesGQL.watch({
      carrier: this.carrier
    }).valueChanges.pipe(
      map(response => response.data.buses.edges)
    ).subscribe(
      (buses) => {
        this.buses = buses.map(e => e.node);
        this.setBusesData();
      }
    );
  }
  setBusesData(): void {
    this.dataSource = new BusesTableDataSource(this.buses);
    this.ngAfterViewInit();
  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
