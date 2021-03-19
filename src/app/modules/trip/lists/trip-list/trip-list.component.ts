import {Component, Input, OnInit} from '@angular/core';
import {TripsGQL} from '../../../../generated/graphql';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.scss']
})
export class TripListComponent implements OnInit {
  @Input() carrier = null;
  trips$;
  constructor(private tripsGQL: TripsGQL) {
    this.trips$ = this.tripsGQL.watch({carrier: this.carrier?.id}).valueChanges.pipe(map(response => response.data.trips.edges));
  }

  ngOnInit(): void {
  }

}
