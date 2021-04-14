import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map, shareReplay} from 'rxjs/operators';
import {echo} from '../../../../util/print';
import {CitiesGQL} from '../../../../generated/graphql';

@Component({
  selector: 'app-trip-search-form',
  templateUrl: './trip-search-form.component.html',
  styleUrls: ['./trip-search-form.component.scss']
})
export class TripSearchFormComponent implements OnInit {
  @Output() formSubmit: EventEmitter<any> = new EventEmitter<any>();
  @Output() formChanged: EventEmitter<any> = new EventEmitter<any>();
  @Input() layout = 'column';

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
    roundTripDepartureDate: ['',  Validators.required],
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
  }

  changeWeakDate(date: Date): void {
    this.tripFomGroup.controls.departureDate.setValue(new Date(date).toISOString());
  }

  _submit(): void {
    const input = this.tripFomGroup.value;
    input.passengers = this.passengers;
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
