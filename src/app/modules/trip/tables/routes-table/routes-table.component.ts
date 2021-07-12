import {AfterViewInit, Component, ContentChild, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTable} from '@angular/material/table';
import {RoutesTableDataSource} from './routes-table-datasource';
import {RoutesGQL} from '../../../../generated/graphql';
import {map, tap} from 'rxjs/operators';
import {MatDialog} from '@angular/material/dialog';
import {CarrierRouteDialogComponent} from '../../dialog/carrier-route-dialog/carrier-route-dialog.component';
import {StorageService} from '../../../../core/service/storage.service';
import {TranslateService} from '@ngx-translate/core';

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
  loading = true;
  notFound = false;

  constructor(private routesGQL: RoutesGQL, private matDialog: MatDialog,
              translate: TranslateService , private storageService: StorageService
  ) {
    translate.use(this.storageService.getLanguage('lang'));
  }

  ngOnInit(): void {
    this.routesGQL.watch({
      carrier: this.carrier,
    }).valueChanges
      .pipe(tap(response => this.loading = response.loading ),map(e => e.data.routes.edges))
      .subscribe(
        (routes) => {
          this.routes = routes.map(e => e.node);
          this.setRoutesData();
          this.notFound = (this.routes.length) < 1;
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
