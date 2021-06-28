import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TicketMuationGQL, TripGQL} from '../../../generated/graphql';
import {echo} from '../../../util/print';
import {BookTicketGQL} from "../../../generated/mutation/graphql";

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  selectedSeats;
  passengerInfo: any;
  public trip = null;
  constructor(private activatedRoute: ActivatedRoute, private tripGQL: TripGQL, private bookTicketGQL: BookTicketGQL) {
    this.activatedRoute.params.subscribe(
      (params) => {
        tripGQL.watch({id: params.trip}).valueChanges.subscribe(
          (response) => this.trip = response.data.trip
        );
      }
    );
    this.activatedRoute.queryParams.subscribe(
      (queryParams) => {
        this.selectedSeats = JSON.parse(decodeURIComponent(queryParams.selectedSeats));
        console.log(this.selectedSeats);
      }
    );
  }

  ngOnInit(): void {
  }

  bookTicket(): void{
    this.passengerInfo.passengers.map(e => {
      const name = e.name.split(' ');
      e.firstName = name[0];
      e.lastName = name[1];
      echo(e);
      return e;
    });
    echo(this.passengerInfo);
    this.bookTicketGQL.mutate({
      input: {
        trip: this.trip.id,
        passengers: JSON.stringify(this.passengerInfo),
      }
    }).subscribe(
      (data) => {
        console.log(data);
      }
    );
  }
}
