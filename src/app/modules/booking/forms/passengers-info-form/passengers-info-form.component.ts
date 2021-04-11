import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {echo} from '../../../../util/print';

@Component({
  selector: 'app-passengers-info-form',
  templateUrl: './passengers-info-form.component.html',
  styleUrls: ['./passengers-info-form.component.scss']
})
export class PassengersInfoFormComponent implements OnInit {
  public passengerInfoFormGroup: FormGroup;
  @Input() passengerInfo;
  @Output() passengerInfoChange: EventEmitter<any> = new EventEmitter<any>();
  @Input('selectedSeats')  set selectedSeats(seats){
    seats.forEach((e) => {
      this.addPassenger(e);
    });
  }
  constructor(private formBuilder: FormBuilder) {
    this.passengerInfoFormGroup = this.formBuilder.group({
      passengers: this.formBuilder.array([])
    });
    this.passengerInfoFormGroup.valueChanges.subscribe(
      (value) => {
        this.passengerInfoChange.emit(value);
      });
  }

  ngOnInit(): void {
  }

  get passengers(): any {
    return this.passengerInfoFormGroup.controls.passengers as FormArray;
  }

  addPassenger(id): void {
    this.passengers.push(this.createPassengerFormGroup(id));
  }

  createPassengerFormGroup(id): any {
    return this.formBuilder.group({
      name: ['', [Validators.required]],
      phone: ['', [Validators.required]]
    });
  }
  submit(): void{
    console.log(this.passengerInfoFormGroup.value);
  }
}
