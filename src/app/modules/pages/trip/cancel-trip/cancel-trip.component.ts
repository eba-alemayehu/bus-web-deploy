import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-cancel-trip',
  templateUrl: './cancel-trip.component.html',
  styleUrls: ['./cancel-trip.component.scss']
})
export class CancelTripComponent implements OnInit {

  tripId;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.params.id);
  }

}
