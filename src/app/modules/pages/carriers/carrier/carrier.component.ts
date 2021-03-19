import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/operators';
import {CarrierGQL, CarrierNode} from '../../../../generated/graphql';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-carrier',
  templateUrl: './carrier.component.html',
  styleUrls: ['./carrier.component.scss']
})
export class CarrierComponent implements OnInit {
  carrier: any;

  constructor(private activatedRouter: ActivatedRoute, private carrierGQL: CarrierGQL) {
    this.activatedRouter.params.subscribe(
      (params) => {
        this.carrierGQL
          .watch({id: params.id, getTrips: false}).valueChanges
          .pipe(map((response) => response.data.carrier))
          .subscribe(
            (carrier) => this.carrier = carrier
          );
      }
    );
  }

  ngOnInit(): void {
  }

}
