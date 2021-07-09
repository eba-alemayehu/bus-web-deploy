import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cancel-trip-form',
  templateUrl: './cancel-trip-form.component.html',
  styleUrls: ['./cancel-trip-form.component.scss']
})
export class CancelTripFormComponent implements OnInit {
  @Input() tripId;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  cancelTrip(): void {

  }

  cancel(): void {
    console.log('cancel trip')
    this.router.navigate([window.location, 'home']);
  }
}
