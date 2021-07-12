import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTable} from '@angular/material/table';
import {BusesTableDataSource} from './buses-table-datasource';
import {BusesGQL} from '../../../../generated/graphql';
import {map, tap} from 'rxjs/operators';
import {TranslateService} from '@ngx-translate/core';
import {StorageService} from '../../../../core/service/storage.service';

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
  loading = true;
  notFound = false;

  constructor(private busesGQL: BusesGQL, translate: TranslateService , private storageService: StorageService
  ) {
    translate.use(this.storageService.getLanguage('lang'));
  }

  ngOnInit(): void {
    this.busesGQL.watch({
      carrier: this.carrier
    }).valueChanges.pipe(tap(response => this.loading = response.loading ),
      map(response => response.data.buses.edges)
    ).subscribe(
      (buses) => {
        this.buses = buses.map(e => e.node);
        this.setBusesData();
        this.notFound = (this.buses.length) < 1;
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
