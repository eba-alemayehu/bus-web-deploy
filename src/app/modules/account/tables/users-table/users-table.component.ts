import {AfterViewInit, Component, ContentChild, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTable} from '@angular/material/table';
import {UsersTableDataSource} from './users-table-datasource';
import {UsersGQL} from '../../../../generated/graphql';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements AfterViewInit, OnInit {
  @ContentChild(TemplateRef) templateRef: TemplateRef<any>;
  @Input() ticketerCarrierId = null;
  @Input() ticketOffice = null;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<any>;

  dataSource: UsersTableDataSource;
  users = [];

  displayedColumns = ['name', 'phone', 'buttons'];

  constructor(private usersGQL: UsersGQL) {
  }

  ngOnInit(): void {
    this.usersGQL.watch({
      carrierticketer_TicketOffice_Carrier: this.ticketerCarrierId,
      carrierticketer_TicketOffice: this.ticketOffice
    }).valueChanges.pipe(map((response) => response.data.busUsers)).subscribe(
      (users) => {
        this.users = users.edges.map(e => e.node);
        this.setUsersData();
      }
    );
    this.setUsersData();
  }

  setUsersData(): void {
    this.dataSource = new UsersTableDataSource(this.users);
    this.ngAfterViewInit();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  addNewUser(user): void{
    this.users.push(user);
    this.setUsersData();
  }

  removeUser(user): void{
    this.users = this.users.filter(e => e.id !== user.id);
    this.setUsersData();
  }
}
