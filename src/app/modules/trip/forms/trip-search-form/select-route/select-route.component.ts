import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {CitiesGQL} from '../../../../../generated/graphql';

@Component({
  selector: 'app-select-route',
  templateUrl: './select-route.component.html',
  styleUrls: ['./select-route.component.scss']
})
export class SelectRouteComponent implements OnInit {
  $route;
  @Input() orientation = 'horizontal';

  @Input('route') set route(value) {
    if (value) {
      this.$route = value;
      this.routeFromGroup.patchValue(this.$route);
    }
  }

  @Output() routeChanged: EventEmitter<any> = new EventEmitter<any>();

  routeFromGroup;
  leavingFromCityFilter = new FormControl();
  destinationCityFilter = new FormControl();

  leavingFromCity = null;
  destinationCity = null;

  days = [];

  allLeavingFromCity = [];
  allDestinationCity = [];
  loading= false;

  constructor(private formBuilder: FormBuilder, private citiesGQL: CitiesGQL) {
    this.loading = true;
    this.citiesGQL.watch({}).valueChanges.subscribe(
      (response) => {
        const cities = response.data.cities.edges;
        this.leavingFromCity = cities;
        this.allLeavingFromCity = cities;
        this.destinationCity = cities;
        this.allDestinationCity = cities;
        if (this.$route) {
          this.routeFromGroup.patchValue(this.$route);
          this.$route = false;
        }
        this.loading = false;
      }
    );
    this.routeFromGroup = this.formBuilder.group({
      leavingFrom: [''],
      destination: [''],
    });

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
    this.routeFromGroup.valueChanges.subscribe((value) => this.routeChanged.emit(value));
  }

  leavingFromCitiesOpened(): void {
    this.leavingFromCity = this.allLeavingFromCity.filter((e) => e.node.id !== this.routeFromGroup.value.destination);
    this.leavingFromCityFilter.setValue('');
  }

  destinationCitiesOpened(): void {
    this.destinationCity = this.allDestinationCity.filter((e) => e.node.id !== this.routeFromGroup.value.leavingFrom);
    this.destinationCityFilter.setValue('');
  }

  swapCities(): void {
    const leavingFromCityValue = this.routeFromGroup.value.leavingFrom;
    const destinationCityValue = this.routeFromGroup.value.destination;
    this.routeFromGroup.controls.destination.setValue(leavingFromCityValue);
    this.routeFromGroup.controls.leavingFrom.setValue(destinationCityValue);
  }
}
