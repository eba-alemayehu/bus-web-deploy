import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {TripsGQL} from '../../../../generated/graphql';
import {map} from 'rxjs/operators';
import {echo} from '../../../../util/print';

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

  @Output() selected: EventEmitter<any> = new EventEmitter<any>();
  trips$;

  constructor(private tripsGQL: TripsGQL) {
  }

  ngOnInit(): void {
    this.loadTrips();
  }

  private loadTrips(): void {
    const departureDate = new Date(this.departureDate);
    const departureDateTo = new Date(departureDate.setDate(departureDate.getDate() + 1));

    this.trips$ = this.tripsGQL.watch(
      {
        carrier: this.carrier?.id,
        bulkRef: this.uuid,
        leavingFrom: this.leavingFrom,
        destination: this.destination,
        departureTime_Gte: new Date(this.departureDate).toISOString(),
        departureTime_Lte: departureDateTo.toISOString(),
      }).valueChanges
      .pipe(map(response => response.data.trips.edges));
  }

  onSelect(trip: any): any {
    this.selected.emit(trip);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.loadTrips();
  }
}
