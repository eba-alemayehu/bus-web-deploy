import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
// @ts-ignore
import {BusesGQL, CitiesGQL, TripMutationGQL, TripsGQL} from '../../../../generated/graphql';
import {echo} from '../../../../util/print';

@Component({
  selector: 'app-trip-form',
  templateUrl: './trip-form.component.html',
  styleUrls: ['./trip-form.component.scss']
})
export class TripFormComponent implements OnInit {
  @Input() carrier;
  @Output() submitted: EventEmitter<any> = new EventEmitter<any>();
  tripFomGroup = this.formBuilder.group({
    leavingFrom: ['', Validators.required],
    destination: ['', Validators.required],
    departureDatetime: ['', Validators.required],
    arrivalDatetime: ['', Validators.required],
    reputation: ['']
  });
  leavingFromCityFilter = new FormControl();
  destinationCityFilter = new FormControl();

  leavingFromCity = null;
  destinationCity = null;

  allLeavingFromCity = [];
  allDestinationCity = [];


  constructor(
    private formBuilder: FormBuilder,
    private tripMutationGQL: TripMutationGQL,
    private busesGQL: BusesGQL,
    private citiesGQL: CitiesGQL) {
    this.citiesGQL.watch({}).valueChanges.subscribe(
      (response) => {
        const cities = response.data.cities.edges;
        this.leavingFromCity = cities;
        this.allLeavingFromCity = cities;
        this.destinationCity = cities;
        this.allDestinationCity = cities;
      }
    );
  }

  ngOnInit(): void {
    this.leavingFromCityFilter.valueChanges.subscribe(
      (value) => {
        this.leavingFromCity = this.allLeavingFromCity.filter( e => e.node.name.toLowerCase().startsWith(value.toLowerCase()));
      }
    );
    this.destinationCityFilter.valueChanges.subscribe(
      (value) => {
        this.destinationCity = this.allDestinationCity.filter( e => e.node.name.toLowerCase().startsWith(value.toLowerCase()));
      }
    );
  }

  _submit(): void {
    const value = this.tripFomGroup.value;
    value.carrier = this.carrier.id;
    echo(value);
    this.tripMutationGQL.mutate({
      input: this.tripFomGroup.value
    }).subscribe(
      (response) => {
        this.submitted.emit(response.data.trip);
      }
    );
  }

  leavingFromCitiesOpened(): void {
    this.leavingFromCity = this.allLeavingFromCity;
    this.leavingFromCityFilter.setValue('');
  }

  destinationCitiesOpened(): void {
    this.destinationCity = this.allDestinationCity;
    this.destinationCityFilter.setValue('');
  }

}
