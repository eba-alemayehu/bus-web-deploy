import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ChangeTripBusMutationGQL, TripGQL, TripNode} from '../../../generated/graphql';
import {map} from 'rxjs/operators';
import {MatDialog} from '@angular/material/dialog';
import {SelectBusDialogComponent} from '../../bus/dialog/select-bus-dialog/select-bus-dialog.component';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.scss']
})
export class TripComponent implements OnInit {
  public trip: any;
  constructor(private activatedRoute: ActivatedRoute, private tripGQL: TripGQL, private matDialog: MatDialog, private changeTripBusMutation: ChangeTripBusMutationGQL) {
    this.activatedRoute.params.subscribe(
      (params) => {
          this.tripGQL.watch({id: params.id}).valueChanges.pipe(map(response => response.data.trip)).subscribe(
            (trip) => this.trip = trip
          );
      }
    );
  }

  ngOnInit(): void {
  }

  addBus(): void {
    this.matDialog.open(SelectBusDialogComponent, {
      data: {
        carrier: this.trip.carrier,
        busSeatConfiguration: this.trip.busSeatConfiguration,
      }
    }).afterClosed().subscribe(
      (bus) => {
        this.changeTripBusMutation.mutate({input: {trip: this.trip.id, bus: bus.id}}).subscribe(
          (trip) => {
            this.trip = trip;
          }
        );
      }
    );
  }
}
