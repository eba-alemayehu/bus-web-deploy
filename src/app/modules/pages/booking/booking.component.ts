import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  selectedSeats;
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(
      (queryParams) => {
        this.selectedSeats = JSON.parse(decodeURIComponent(queryParams.selectedSeats));
      }
    );
  }

  ngOnInit(): void {
  }

}
