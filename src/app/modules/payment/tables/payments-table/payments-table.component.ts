import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { PaymentsTableDataSource, PaymentsTableItem } from './payments-table-datasource';
import {TranslateService} from '@ngx-translate/core';
import {StorageService} from '../../../../core/service/storage.service';

@Component({
  selector: 'app-payments-table',
  templateUrl: './payments-table.component.html',
  styleUrls: ['./payments-table.component.scss']
})
export class PaymentsTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<PaymentsTableItem>;
  dataSource: PaymentsTableDataSource;
  $data = [];
  @Output() verify: EventEmitter<any> = new EventEmitter<any>();
  @Input() title: string;
  @Input() set data(value: any){
    this.$data = value;
    this.setDataSource(value);
    if (!!this.table?.dataSource) {
      this.ngAfterViewInit();
    }
  }
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['bank', 'orderedBy', 'price', 'transactionId', 'verify'];
  constructor(translate: TranslateService , private storage: StorageService) {
    translate.use(this.storage.getLanguage('lang'));
  }
  ngOnInit(): void {
    this.setDataSource(this.$data);
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
  private setDataSource(data): void{
      this.dataSource = new PaymentsTableDataSource(data);
  }
}
