import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map, shareReplay} from 'rxjs/operators';
import {echo} from '../../../../util/print';
import {CitiesGQL} from '../../../../generated/graphql';
import moment from 'moment';

@Component({
  selector: 'app-trip-search-form',
  templateUrl: './trip-search-form.component.html',
  styleUrls: ['./trip-search-form.component.scss']
})
export class TripSearchFormComponent implements OnInit {
  @Output() formSubmit: EventEmitter<any> = new EventEmitter<any>();
  @Output() formChanged: EventEmitter<any> = new EventEmitter<any>();
  @Input() layout = 'column';
  todayDate = new Date();

  @Input('input') set input(value) {
    this.tripFomGroup.patchValue(value);
    this.tripFomGroup.controls.departureDate.setValue(new Date(value.departureDate).toISOString());
    this.tripFomGroup.controls.roundTrip.setValue(value.roundTrip === 'true');
    this.passengers = value.passengers;
  }

  tripFomGroup = this.formBuilder.group({
    leavingFrom: ['', Validators.required],
    destination: ['', Validators.required],
    roundTrip: [false],
    departureDate: ['', Validators.required],
    returnDate: [''],
    roundTripDepartureDate: ['', ],
  });
  passengers = 1;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  leavingFromCityFilter = new FormControl();
  destinationCityFilter = new FormControl();

  leavingFromCity = null;
  destinationCity = null;

  days = [];

  allLeavingFromCity = [];
  allDestinationCity = [];

  constructor(private formBuilder: FormBuilder, private breakpointObserver: BreakpointObserver, private citiesGQL: CitiesGQL) {
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
        this.leavingFromCity = this.allLeavingFromCity.filter(
          e => e.node.name.toLowerCase().startsWith(value.toLowerCase()));
      }
    );
    this.destinationCityFilter.valueChanges.subscribe(
      (value) => {
        this.destinationCity = this.allDestinationCity.filter(e => e.node.name.toLowerCase().startsWith(value.toLowerCase()));
      }
    );
    this.tripFomGroup.valueChanges.subscribe((value) => this.formChanged.emit(value));

    this.getWeakDays();
  }

  getWeakDays = (length: number = 5 ) => {
    for (let i = 0; i < length; i++) {
      this.days.push({
        day: moment().add(i, 'days').format('dddd').slice(0, 3).toUpperCase(),
        dateNum: moment().add(i, 'days').format('Do'),
        date: moment().add(i, 'days').toDate(),
      });
    }
  }

  changeDepartureDate = (selectedDate, $event) => {
    $event.preventDefault();
    this.tripFomGroup.controls.departureDate.setValue(selectedDate);
  }

  returnDatePicker = (selectedDate) => {
    this.tripFomGroup.controls.returnDate.setValue(selectedDate);
  }

  _submit(): void {
    const input = this.tripFomGroup.value;
    input.passengers = this.passengers;
    if (this.tripFomGroup.invalid){
      return;
    }
    this.formSubmit.emit(input);
  }

  subtractPassenger(): void {
    this.passengers -= 1;
  }

  addPassenger(): void {
    this.passengers += 1;
  }

  leavingFromCitiesOpened(): void {
    this.leavingFromCity = this.allLeavingFromCity.filter((e) => e.node.id !== this.tripFomGroup.value.destination);
    this.leavingFromCityFilter.setValue('');
  }

  destinationCitiesOpened(): void {
    this.destinationCity = this.allDestinationCity.filter((e) => e.node.id !== this.tripFomGroup.value.leavingFrom);
    this.destinationCityFilter.setValue('');
  }

  swapCities(): void {
    const leavingFromCityValue = this.tripFomGroup.value.leavingFrom;
    const destinationCityValue = this.tripFomGroup.value.destination;
    this.tripFomGroup.controls['destination'].setValue(leavingFromCityValue);
    this.tripFomGroup.controls['leavingFrom'].setValue(destinationCityValue);
  }
}
