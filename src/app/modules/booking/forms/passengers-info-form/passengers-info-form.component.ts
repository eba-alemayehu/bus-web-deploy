import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BookTicketGQL} from '../../../../generated/graphql';
import {echo} from '../../../../util/print';

@Component({
  selector: 'app-passengers-info-form',
  templateUrl: './passengers-info-form.component.html',
  styleUrls: ['./passengers-info-form.component.scss']
})
export class PassengersInfoFormComponent implements OnInit {
  public passengerInfoFormGroup: FormGroup;
  @Input() passengerInfo;
  @Input() trip;
  @Output() passengerInfoChange: EventEmitter<any> = new EventEmitter<any>();

  @Input('selectedSeats') set selectedSeats(seats) {
    seats.forEach((e) => {
      this.addPassenger(e);
    });
  }

  // private passengers: {
  //   firstname: string,
  //   lastName: string,
  //   phone: string,
  //   busStop: string,
  //   busSeatConfigurationSeat: string,
  // }[];

  constructor(private formBuilder: FormBuilder, private bookTicketGQL: BookTicketGQL) {
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

  createPassengerFormGroup(busSeatConfigurationSeatId): any {
    return this.formBuilder.group({
      busSeatConfigurationSeat: busSeatConfigurationSeatId,
      name: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      busStop: ['', [Validators.required]]
    });
  }

  submit(): void {
    if (this.passengerInfoFormGroup.valid) {
      const passengers = this.passengerInfoFormGroup.value.passengers.map(
        (e) => {
          const name = e.name.split(' ');
          e.firstName = name[0];
          e.lastName = name[1];
          return e;
        }
      );

      this.bookTicketGQL.mutate({
        input: {
          trip: this.trip.id,
          passengers: JSON.stringify({'passengers': passengers}),
        }
      }).subscribe(
        (response) => {
          echo(response);
        },
        (error) => {
          echo(error);
        }
      );
      console.log('error');
    }
  }
}
