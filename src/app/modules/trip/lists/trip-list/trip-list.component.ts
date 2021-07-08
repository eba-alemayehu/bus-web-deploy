import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {TripsGQL} from '../../../../generated/graphql';
import {map, tap} from 'rxjs/operators';
import {echo} from '../../../../util/print';
import {TranslateService} from '@ngx-translate/core';
import {StorageService} from '../../../../core/service/storage.service';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.scss']
})
export class TripListComponent implements OnInit, OnChanges {
  @Input() carrier = null;
  @Input() uuid = null;
  @Input() leavingFrom = null;
  @Input() destination = null;
  @Input() departureDate = null;
  @Input() loading = true;

  @Output() selected: EventEmitter<any> = new EventEmitter<any>();
  trips$;
  $pageInfo:null;
  constructor(private tripsGQL: TripsGQL, translate: TranslateService , private storage: StorageService) {
    translate.use(this.storage.getLanguage('lang'));
  }

  ngOnInit(): void {
    this.loadTrips();
  }

  private loadTrips(): void {
    const departureDate = new Date(this.departureDate);
    const departureDateTo = new Date(departureDate.setDate(departureDate.getDate() + 1));

    this.trips$ = this.tripsGQL.watch(
      {
        carrier: (typeof (this.carrier) === 'string') ? this.carrier : this.carrier?.id,
        bulkRef: this.uuid,
        leavingFrom: this.leavingFrom,
        destination: this.destination,
        departureTime_Gte: (this.departureDate === null) ? null : new Date(this.departureDate).toISOString(),
        departureTime_Lte: (this.departureDate === null) ? null : departureDateTo.toISOString(),
      }).valueChanges
      .pipe(
        tap(response => {
          this.loading = response.loading;
        }),
        map(response => response.data.trips.edges),
      );
  }

  onSelect(trip: any): any {
    this.selected.emit(trip);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.loadTrips();
  }

  onScroll(): void {
    this.loadTrips()
  }
}
