import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
// @ts-ignore
import {
  BusesGQL,
  BusSeatConfigurationGQL,
  BusSeatConfigurationsGQL,
  CitiesGQL,
  TripMutationGQL,
  TripsGQL
} from '../../../../generated/graphql';
import {echo} from '../../../../util/print';
import {map} from 'rxjs/operators';
import {TranslateService} from '@ngx-translate/core';
import {StorageService} from '../../../../core/service/storage.service';

@Component({
  selector: 'app-trip-form',
  templateUrl: './trip-form.component.html',
  styleUrls: ['./trip-form.component.scss']
})
export class TripFormComponent implements OnInit {
  @Input() carrier;
  @Input() editMode = false;
  @Output() submitted: EventEmitter<any> = new EventEmitter<any>();
  @Input('trip') set trip(value){
    const trip = value;
    trip.leavingFrom = trip.route.leavingFrom.id;
    trip.destination = trip.route.destination.id;
    this.tripFomGroup.patchValue(value);
  }
  tripFomGroup = this.formBuilder.group({
    id: [''],
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
  busSeatConfigurations$: Observable<any>;
  busSeatConfiguration: any;


  constructor(
    private formBuilder: FormBuilder,
    private tripMutationGQL: TripMutationGQL,
    private busesGQL: BusesGQL,
    private busSeatConfigurationGQL: BusSeatConfigurationsGQL,
    private citiesGQL: CitiesGQL,
    translate: TranslateService , private storage: StorageService) {
    translate.use(this.storage.getLanguage('lang'));
    this.busSeatConfigurations$ = busSeatConfigurationGQL
      .watch({}).valueChanges
      .pipe(map((response) => response.data.busSeatConfigurations.edges));
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
    value.busSeatConfiguration = this.busSeatConfiguration.node.id;
    this.tripMutationGQL.mutate({
      input: this.tripFomGroup.value
    }).subscribe(
      (response) => {
        this.submitted.emit(response.data.trip);
        echo(response.data.trip);
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

  selectBusSeatConfiguration(config: any): void {
    this.busSeatConfiguration = config;
  }
}
