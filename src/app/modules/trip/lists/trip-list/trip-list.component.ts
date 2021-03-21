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

  @Output() selected: EventEmitter<any> = new EventEmitter<any>();
  trips$;
  constructor(private tripsGQL: TripsGQL) {
  }

  ngOnInit(): void {
  }

  onSelect(trip: any): any{
    this.selected.emit(trip);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.trips$ = this.tripsGQL.watch(
      {
        carrier: this.carrier?.id,
        bulkRef: this.uuid,
        leavingFrom: this.leavingFrom,
        destination: this.destination
      }).valueChanges
      .pipe(map(response => response.data.trips.edges));
  }
}
