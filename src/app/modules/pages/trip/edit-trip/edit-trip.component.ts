import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TripGQL} from '../../../../generated/graphql';

@Component({
  selector: 'app-edit-trip',
  templateUrl: './edit-trip.component.html',
  styleUrls: ['./edit-trip.component.scss']
})
export class EditTripComponent implements OnInit {

  tripId;
  trip;
  constructor(private activatedRoute: ActivatedRoute, private tripGQL: TripGQL, private router: Router) { }

  ngOnInit(): void {
    this.tripId = this.activatedRoute.snapshot.params.id;
  }

  submitted($event: any) {
    this.router.navigate(['/']);
  }
}
