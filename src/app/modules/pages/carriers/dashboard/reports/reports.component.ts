import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TripGQL} from '../../../../../generated/graphql';
import {map, tap} from 'rxjs/operators';
import {echo} from '../../../../../util/print';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  fileName: string;
  // TODO: trip id
  constructor(public activatedRoute: ActivatedRoute, private tripGQL: TripGQL) {
    this.activatedRoute.params.subscribe(
      (params) => {
        echo(params.id);
        this.tripGQL.watch({id: 'VHJpcE5vZGU6MzQwMg=='}).valueChanges.pipe(
          map(response => response.data.trip)).subscribe(
          (trip) => {
            echo(trip);
            this.fileName = `${trip.route.leavingFrom.name}-to-${trip.route.destination.name}-${trip.departureTime}.xlsx`;
            echo(this.fileName);
          }
        );
      }
    );
  }

  ngOnInit(): void {
  }

}
