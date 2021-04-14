import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TicketMuationGQL, TripGQL} from '../../../generated/graphql';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  selectedSeats;
  passengerInfo: any[];
  private trip: any;
  constructor(private activatedRoute: ActivatedRoute, private tripGQL: TripGQL, private ticketMutation: TicketMuationGQL) {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.trip = tripGQL.watch({id: params.trip}).valueChanges.subscribe(
          (response) => this.trip = response.data.trip
        );
      }
    );
    this.activatedRoute.queryParams.subscribe(
      (queryParams) => {
        this.selectedSeats = JSON.parse(decodeURIComponent(queryParams.selectedSeats));
      }
    );
  }

  ngOnInit(): void {
  }

  bookTicket(): void{
    // this.ticketMutation.mutate({
    //   input: {
    //
    //   }
    // })
  }
}
