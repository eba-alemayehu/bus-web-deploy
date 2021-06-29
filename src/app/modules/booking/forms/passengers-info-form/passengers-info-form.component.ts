import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {echo} from '../../../../util/print';
import {BookTicketGQL, BookTicketMutation} from "../../../../generated/mutation/graphql";
import {MatDialog} from "@angular/material/dialog";
import {PassengerInfoPreviewComponent} from "../../passenger-info-preview/passenger-info-preview.component";

@Component({
  selector: 'app-passengers-info-form',
  templateUrl: './passengers-info-form.component.html',
  styleUrls: ['./passengers-info-form.component.scss']
})
export class PassengersInfoFormComponent implements OnInit {
  public passengerInfoFormGroup: FormGroup;
  @Input() passengerInfo;
  @Output() passengerInfoChange: EventEmitter<any> = new EventEmitter<any>();

  @Input('selectedSeats') set selectedSeats(seats) {
    seats.forEach((e) => {
      this.addPassenger(e);
    });
  }

  @Input() trip;

  constructor(private formBuilder: FormBuilder, private bookTicketMutation: BookTicketGQL) {
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

  createPassengerFormGroup(seat): any {
    return this.formBuilder.group({
      name: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      busSeatConfigurationSeat: [seat, [Validators.required]],
      busStop: ['', [Validators.required]],
    });
  }

  submit(): void {
  }
}
