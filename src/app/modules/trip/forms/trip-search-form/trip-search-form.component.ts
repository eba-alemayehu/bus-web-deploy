import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map, shareReplay} from 'rxjs/operators';
import {echo} from '../../../../util/print';
import {CitiesGQL} from '../../../../generated/graphql';
import moment from 'moment';
import {TranslateService} from '@ngx-translate/core';
import {StorageService} from '../../../../core/service/storage.service';

@Component({
  selector: 'app-trip-search-form',
  templateUrl: './trip-search-form.component.html',
  styleUrls: ['./trip-search-form.component.scss']
})
export class TripSearchFormComponent implements OnInit {
  @Output() formSubmit: EventEmitter<any> = new EventEmitter<any>();
  @Output() formChanged: EventEmitter<any> = new EventEmitter<any>();
  @Input() layout = 'column';
  @Input() hideDateInput = false;
  todayDate = new Date();
  route;

  @Input('input') set input(value) {
    this.tripFomGroup.patchValue(value);
    this.route = {
      leavingFrom: this.tripFomGroup.value.leavingFrom,
      destination: this.tripFomGroup.value.destination
    };

    if (value.departureDate) {
      this.tripFomGroup.controls.departureDate.setValue(new Date(value.departureDate).toISOString());
      this.tripFomGroup.controls.roundTrip.setValue(value.roundTrip === 'true');
    }
    this.passengers = (isNaN(parseInt(value.passengers, 10))) ? 1 : value.passengers;
  }

  tripFomGroup = this.formBuilder.group({
    leavingFrom: ['', Validators.required],
    destination: ['', Validators.required],
    roundTrip: [false],
    departureDate: ['', Validators.required],
    returnDate: [''],
    roundTripDepartureDate: [''],
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

  constructor(private formBuilder: FormBuilder,
              private breakpointObserver: BreakpointObserver,
              private citiesGQL: CitiesGQL,
              translate: TranslateService, private storage: StorageService
  ) {
    translate.use(this.storage.getLanguage('lang'));

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

  getWeakDays = (length: number = 5) => {
    for (let i = 0; i < length; i++) {
      this.days.push({
        day: moment().add(i, 'days').format('dddd').slice(0, 3).toUpperCase(),
        dateNum: moment().add(i, 'days').format('Do'),
        date: moment().add(i, 'days').toDate(),
      });
    }
  }

  changeDepartureDate = (selectedDate) => {
    this.tripFomGroup.controls.departureDate.setValue(selectedDate);
  }

  returnDatePicker = (selectedDate) => {
    this.tripFomGroup.controls.returnDate.setValue(selectedDate);
  }

  _submit(): void {
    const input = this.tripFomGroup.value;
    input.passengers = this.passengers;
    if (this.tripFomGroup.invalid) {
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

  routeChanged(route): void {
    this.tripFomGroup.patchValue(route);
  }
}
