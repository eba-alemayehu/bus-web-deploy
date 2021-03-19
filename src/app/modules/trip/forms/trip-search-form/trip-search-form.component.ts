import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map, shareReplay} from 'rxjs/operators';
import {echo} from '../../../../util/print';

@Component({
  selector: 'app-trip-search-form',
  templateUrl: './trip-search-form.component.html',
  styleUrls: ['./trip-search-form.component.scss']
})
export class TripSearchFormComponent implements OnInit {
  @Output() formSubmit: EventEmitter<any> = new EventEmitter<any>();
  @Input() layout = 'column';
  @Input('input') set input(value){
    this.tripFomGroup.patchValue(value);
    this.tripFomGroup.controls.departureDate.setValue(new Date(value.departureDate).toISOString());
    this.tripFomGroup.controls.roundTrip.setValue(value.roundTrip === 'true');
    this.passengers = value.passengers;
  }
  tripFomGroup = this.formBuilder.group({
    leavingFrom: [''],
    destination: [''],
    roundTrip: [false],
    departureDate: [''],
    roundTripDepartureDate: [],
  });
  passengers = 1;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  constructor(private formBuilder: FormBuilder, private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
  }
  _submit(): void{
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
}
