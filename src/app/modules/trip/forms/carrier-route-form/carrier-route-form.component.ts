import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {RoutePriceMutationGQL} from '../../../../generated/mutation/graphql';
import {echo} from '../../../../util/print';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-carrier-route-form',
  templateUrl: './carrier-route-form.component.html',
  styleUrls: ['./carrier-route-form.component.scss']
})
export class CarrierRouteFormComponent implements OnInit {
  @Output() carrierRouteSubmit: EventEmitter<any> = new EventEmitter();
  @Input('carrier') set carrier(value) {
    this.carrierRouteFormGroup.patchValue({carrier: value});
  }

  @Input('route') set route(value) {
    this.carrierRouteFormGroup.patchValue(value);
  }

  loading = false;
  carrierRouteFormGroup: any;

  constructor(private fromBuilder: FormBuilder, private routePriceMutationGQL: RoutePriceMutationGQL) {
    this.carrierRouteFormGroup = this.fromBuilder.group({
      carrier: ['', Validators.required],
      leavingFrom: ['', Validators.required],
      destination: ['', Validators.required],
      price: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  submit(): void {
    console.log(this.carrierRouteFormGroup.value);
    this.loading = true;
    this.routePriceMutationGQL.mutate({
      input: this.carrierRouteFormGroup.value
    }).pipe(tap(response => this.loading = false)).subscribe(
      (response) => {
          this.carrierRouteSubmit.emit(response);
      }
    );
  }

  routeChanged(route: any): void {
    this.carrierRouteFormGroup.patchValue(route);
  }
}
