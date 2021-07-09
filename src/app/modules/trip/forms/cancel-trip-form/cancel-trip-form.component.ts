import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CancelTripGQL} from '../../../../generated/mutation/graphql';

@Component({
  selector: 'app-cancel-trip-form',
  templateUrl: './cancel-trip-form.component.html',
  styleUrls: ['./cancel-trip-form.component.scss']
})
export class CancelTripFormComponent implements OnInit {
  @Input() tripId;
  @Input() backUrl;
  cancelled= false;
  constructor(private router: Router, private cancelTripMutation: CancelTripGQL) { }

  ngOnInit(): void {
  }

  cancelTrip(): void {
    this.cancelTripMutation.mutate(
    {
      input: {
      trip: this.tripId
    }
    }).subscribe(value => {
      this.cancelled = true;
      console.log("trip canceled");
      console.log(this.backUrl);
      // this.router.navigate([this.backUrl]);

    });
  }

  cancel(): void {
    console.log('cancel trip');
    this.router.navigate([window.location, 'home']);
  }
}
