import {AfterViewInit, Component, ContentChild, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTable} from '@angular/material/table';
import {RoutesTableDataSource} from './routes-table-datasource';
import {RoutesGQL} from '../../../../generated/graphql';
import {map} from 'rxjs/operators';
import {MatDialog} from '@angular/material/dialog';
import {CarrierRouteDialogComponent} from '../../dialog/carrier-route-dialog/carrier-route-dialog.component';

@Component({
  selector: 'app-routes-table',
  templateUrl: './routes-table.component.html',
  styleUrls: ['./routes-table.component.scss']
})
export class RoutesTableComponent implements AfterViewInit, OnInit {
  @ContentChild(TemplateRef) templateRef: TemplateRef<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<any>;
  @Input() carrier = null;
  dataSource: RoutesTableDataSource;
  routes = [];

  displayedColumns = ['from', 'to', 'price', 'buttons'];

  constructor(private routesGQL: RoutesGQL, private matDialog: MatDialog) {
  }

  ngOnInit(): void {
    this.routesGQL.watch({
      carrier: this.carrier,
    }).valueChanges
      .pipe(map(e => e.data.routes.edges))
      .subscribe(
        (routes) => {
          this.routes = routes.map(e => e.node);
          this.setRoutesData();
        }
      );
    this.setRoutesData();
  }

  setRoutesData(): void {
    this.dataSource = new RoutesTableDataSource(this.routes);
    if (this.dataSource) {
      this.ngAfterViewInit();
    }
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  addRoute(route, price = null): void {

    if (route) {
      this.routes = this.routes.filter(e => (e.leavingFrom.id !== route.leavingFrom.id));

      route.price = price;
      this.routes.push(route);
      this.setRoutesData();

    }

  }
}
