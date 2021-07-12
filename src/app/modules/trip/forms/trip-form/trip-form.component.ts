import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
// @ts-ignore
import {
  BusesGQL,
  BusSeatConfigurationGQL,
  BusSeatConfigurationsGQL,
  CitiesGQL, RoutesGQL,
  TripMutationGQL,
  TripsGQL
} from '../../../../generated/graphql';
import {echo} from '../../../../util/print';
import {map} from 'rxjs/operators';
import {TranslateService} from '@ngx-translate/core';
import {StorageService} from '../../../../core/service/storage.service';
import {ActivatedRoute, Route, Router} from '@angular/router';

@Component({
  selector: 'app-trip-form',
  templateUrl: './trip-form.component.html',
  styleUrls: ['./trip-form.component.scss']
})
export class TripFormComponent implements OnInit {
  @Input() carrier;
  @Input() tripId;
  @Input() editMode = false;
  @Output() submitted: EventEmitter<any> = new EventEmitter<any>();
  @Input('trip') set trip(value){
    const trip = value;
    trip.leavingFrom = trip.route.leavingFrom.id;
    trip.destination = trip.route.destination.id;
    this.tripFomGroup.patchValue(value);
  }
  tripRoutes: any;
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
  todayDate = new Date();

  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private tripMutationGQL: TripMutationGQL,
    private busesGQL: BusesGQL,
    private busSeatConfigurationGQL: BusSeatConfigurationsGQL,
    private citiesGQL: CitiesGQL,
    private routesGQL: RoutesGQL,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    translate: TranslateService , private storage: StorageService) {
    translate.use(this.storage.getLanguage('lang'));
    this.activatedRoute.params.subscribe(
      (params) => {
        this.routesGQL.watch({carrier: params.id }).valueChanges.subscribe(
          (response) => {
            this.tripRoutes = response.data.routes.edges.filter(route => route.node.price != null);
          }
        );
      });

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
        this.loading = false;
      }
    );
  }

  ngOnInit(): void {
    this.leavingFromCityFilter.valueChanges.subscribe(
      (value) => {
        this.leavingFromCity = this.leavingFromCity.filter( e => e.node.name.toLowerCase().startsWith(value.toLowerCase()));
      }
    );
    this.destinationCityFilter.valueChanges.subscribe(
      (value) => {
        this.destinationCity = this.destinationCity.filter( e => e.node.name.toLowerCase().startsWith(value.toLowerCase()));
      }
    );
  }

  _submit(): void {
    echo(this.tripRoutes);
    echo(this.tripFomGroup.value.leavingFrom);
    this.tripRoutes.map(route => {
      if (route.node.leavingFrom.id !== this.tripFomGroup.value.leavingFrom){
        this.tripFomGroup.controls.leavingFrom.setErrors({leavingFrom: 'the Route price is not setted!'});
        this.tripFomGroup.controls.destination.setErrors({destination: 'the Route price is not setted!'});
        return;
      }else if (route.node.destination.id !== this.tripFomGroup.value.destination){
        this.tripFomGroup.controls.leavingFrom.setErrors({leavingFrom: 'the Route price is not setted!'});
        this.tripFomGroup.controls.destination.setErrors({destination: 'the Route price is not setted!'});
        return;
      }
      else{
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
    });
    return;
 }

  leavingFromCitiesOpened(): void {
    this.leavingFromCity = this.allLeavingFromCity.filter((e) => e.node.id !== this.tripFomGroup.value.destination);
    echo(this.leavingFromCity);
    this.leavingFromCityFilter.setValue('');
  }

  destinationCitiesOpened(): void {
    this.destinationCity = this.allDestinationCity.filter((e) => e.node.id !== this.tripFomGroup.value.leavingFrom);
    this.destinationCityFilter.setValue('');
  }

  selectBusSeatConfiguration(config: any): void {
    this.busSeatConfiguration = config;
  }
}
