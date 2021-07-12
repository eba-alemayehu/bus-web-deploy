import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BusesGQL} from '../../../../generated/graphql';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {TranslateService} from '@ngx-translate/core';
import {StorageService} from '../../../../core/service/storage.service';

@Component({
  selector: 'app-bus-list',
  templateUrl: './bus-list.component.html',
  styleUrls: ['./bus-list.component.scss']
})
export class BusListComponent implements OnInit {
  @Input() carrier;
  @Input() busSeatConfiguration;
  @Input() loading = true;

  @Output() selected: EventEmitter<any> = new EventEmitter<any>();

  buses$: Observable<any>;

  constructor(private busesGQL: BusesGQL, translate: TranslateService , private storageService: StorageService
  ) {
    translate.use(this.storageService.getLanguage('lang'));
  }

  ngOnInit(): void {
    this.buses$ = this.busesGQL
      .watch({
        carrier: (typeof (this.carrier) === 'string') ? this.carrier : this.carrier?.id
      }).valueChanges
      .pipe(
        tap(response => this.loading = response.loading),
        map(response => response.data.buses.edges));
  }

  _selected(bus: any): void {
    this.selected.emit(bus);
  }
}
