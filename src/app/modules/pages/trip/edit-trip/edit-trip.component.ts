import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-trip',
  templateUrl: './edit-trip.component.html',
  styleUrls: ['./edit-trip.component.scss']
})
export class EditTripComponent implements OnInit {

  tripId;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.tripId = this.activatedRoute.snapshot.params.id;
  }

}
