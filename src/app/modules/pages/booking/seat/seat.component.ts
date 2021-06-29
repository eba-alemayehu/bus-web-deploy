import { Component, OnInit } from '@angular/core';
import {TripGQL} from '../../../../generated/graphql';
import {ActivatedRoute, Router} from '@angular/router';
import {echo} from "../../../../util/print";

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.scss']
})
export class SeatComponent implements OnInit {
  trip = null;
  selectedBusSeatConfigurationSeats = [];
  constructor(private tripGQL: TripGQL, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.trip = tripGQL.watch({id: params.trip}).valueChanges.subscribe(
          (response) => this.trip = response.data.trip
        );
      }
    );
  }

  ngOnInit(): void {
  }

  next(): void{
    echo(this.selectedBusSeatConfigurationSeats);
    const selectedSeatsId = JSON.stringify(this.selectedBusSeatConfigurationSeats.map(e => e.id));
    this.router.navigate(['/booking/' + this.trip.id], { queryParams: {selectedSeats: encodeURIComponent(selectedSeatsId)}});
  }
}
