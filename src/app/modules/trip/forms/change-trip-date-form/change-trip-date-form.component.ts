import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-change-trip-date-form',
  templateUrl: './change-trip-date-form.component.html',
  styleUrls: ['./change-trip-date-form.component.scss']
})
export class ChangeTripDateFormComponent implements OnInit {
  changeTimeFormGroup: FormGroup;
  @Input() tripId;
  constructor() { }

  ngOnInit(): void {
    this.changeTimeFormGroup = new FormGroup({
      departureDatetime: new FormControl(null, Validators.required),
      arrivalDatetime: new FormControl(null, Validators.required)
    });
  }

  onSubmit(): void {

    console.log(this.changeTimeFormGroup);

  }
}
