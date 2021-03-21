import {Component, OnInit} from '@angular/core';
import {map} from 'rxjs/operators';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {CarrierGQL} from '../../../../../generated/graphql';
import {MatDialog} from '@angular/material/dialog';
import {TripDialogComponent} from '../../../../trip/dialog/trip-dialog/trip-dialog.component';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.scss']
})
export class TripsComponent implements OnInit {
  carrier;

  constructor(private activatedRoute: ActivatedRoute, private carrierGQL: CarrierGQL, private matDialog: MatDialog, private route: Router) {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.carrierGQL
          .watch({id: params.id, getTrips: true}).valueChanges
          .pipe(map((response) => response.data.carrier))
          .subscribe(
            (carrier) => this.carrier = carrier
          );
      }
    );
  }

  ngOnInit(): void {
  }

  addTripDialog(): void {
    this.matDialog.open(TripDialogComponent, {
      width: '480px',
      data: {
        carrier: this.carrier,
      },
    });
  }

  tripClick(trip: any): void{
    this.route.navigate(['/trip/' + trip.node.id]);
  }
}
