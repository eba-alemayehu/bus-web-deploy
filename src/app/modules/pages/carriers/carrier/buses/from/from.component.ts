import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {BusSeatConfigurationGQL, BusSeatConfigurationsGQL, CarrierGQL} from '../../../../../../generated/graphql';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.scss']
})
export class FromComponent implements OnInit {
  carrier;

  constructor(private activatedRoute: ActivatedRoute, private carrierGQL: CarrierGQL) {
    this.activatedRoute.params.subscribe(
      (params) => {
        carrierGQL.watch({id: params.id, getTrips: false}).valueChanges.pipe(map((response) => response.data.carrier))
          .subscribe(
          (carrier) => {
            this.carrier = carrier;
          }
        );
      }
    );
  }

  ngOnInit(): void {
  }

}
