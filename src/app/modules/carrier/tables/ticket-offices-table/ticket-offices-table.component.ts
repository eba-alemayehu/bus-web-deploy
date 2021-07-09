import {AfterViewInit, Component, ContentChild, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TicketOfficesTableDataSource } from './ticket-offices-table-datasource';
import {TicketOfficesGQL, UsersGQL} from '../../../../generated/graphql';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-ticket-offices-table',
  templateUrl: './ticket-offices-table.component.html',
  styleUrls: ['./ticket-offices-table.component.scss']
})
export class TicketOfficesTableComponent implements AfterViewInit, OnInit {
  @ContentChild(TemplateRef) templateRef: TemplateRef<any>;
  @Input() carrier;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<any>;
  dataSource: TicketOfficesTableDataSource;
  ticketOffices = [];

  displayedColumns = ['name', 'city', 'buttons'];

  constructor(private ticketOfficesGQL: TicketOfficesGQL) {
  }

  ngOnInit(): void {
    this.ticketOfficesGQL.watch({
      carrier: this.carrier
    }).valueChanges.pipe(map((response) => response.data.ticketOffices)).subscribe(
      (users) => {
        this.ticketOffices = users.edges.map(e => e.node);
        this.setUsersData();
      }
    );
    this.setUsersData();
  }

  setUsersData(): void {
    this.dataSource = new TicketOfficesTableDataSource(this.ticketOffices);
    this.ngAfterViewInit();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
