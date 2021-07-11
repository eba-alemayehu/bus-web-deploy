import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {echo} from '../../../../util/print';
import {CitiesGQL} from '../../../../generated/graphql';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.scss']
})
export class FilterFormComponent implements OnInit {
  @Input() filterParams;
  @Output() filterParamsChange: EventEmitter<any> = new EventEmitter<any>();

  filterFormGroup = this.formBuilder.group({
    leavingFrom: [null, ],
    destination: [null, ],
    startDate: [null, ],
    endDate: [null, ],
    boardingFrom: [null],
    isBooked: [null],
    isPaid: [null],
    isUnpaid: [null]
  });

  leavingFromCityFilter = new FormControl();
  destinationCityFilter = new FormControl();
  boardingFrom = new FormControl();

  leavingFromCity = null;
  destinationCity = null;

  allLeavingFromCity = [];
  allDestinationCity = [];

  constructor(private formBuilder: FormBuilder, private citiesGQL: CitiesGQL) { }

  leavingFromCitiesOpened(): void {
    this.leavingFromCity = this.allLeavingFromCity.filter((e) => e.node.id !== this.filterFormGroup.value.destination);
    this.leavingFromCityFilter.setValue('');
  }

  destinationCitiesOpened(): void {
    this.destinationCity = this.allDestinationCity.filter((e) => e.node.id !== this.filterFormGroup.value.leavingFrom);
    this.destinationCityFilter.setValue('');
  }

  submit(): void {
    const input = this.filterFormGroup.value;
    echo(input);
  }

  ngOnInit(): void {
    this.citiesGQL.watch().valueChanges.pipe((map(response => response.data.cities.edges)))
      .subscribe((cites) => {
        this.allLeavingFromCity = cites.map(e => e.node);
        this.allDestinationCity = cites.map(e => e.node);
      });
    this.filterFormGroup.valueChanges.subscribe(
      (filter) => {
        this.filterParamsChange.emit(filter);
      }
    );
  }


  routeChanged(route): void {
    this.filterFormGroup.patchValue(route);
  }
}
