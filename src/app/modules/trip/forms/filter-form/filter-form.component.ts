import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {echo} from '../../../../util/print';

@Component({
  selector: 'app-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.scss']
})
export class FilterFormComponent implements OnInit {


  filterFormGroup = this.formBuilder.group({
    leavingFrom: ['', ],
    destination: ['', ],
    startDate: ['', ],
    endDate: ['', ],
    boardingFrom: [''],
  });

  leavingFromCityFilter = new FormControl();
  destinationCityFilter = new FormControl();
  boardingFrom = new FormControl();

  leavingFromCity = null;
  destinationCity = null;

  allLeavingFromCity = [];
  allDestinationCity = [];

  constructor(private formBuilder: FormBuilder, ) { }

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
  }



}
