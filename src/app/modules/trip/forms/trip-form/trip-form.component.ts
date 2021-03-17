import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-trip-form',
  templateUrl: './trip-form.component.html',
  styleUrls: ['./trip-form.component.scss']
})
export class TripFormComponent implements OnInit {
  @Output() submit: EventEmitter<any> = new EventEmitter<any>();
  tripFomGroup = this.formBuilder.group({
    leavingFrom: [''],
    destination: [''],
    roundTrip: [false],
    departureDate: [''],
    roundTripDepartureDate: [],
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }
  _submit(): void{
    this.submit.emit(this.tripFomGroup.value);
  }
}
