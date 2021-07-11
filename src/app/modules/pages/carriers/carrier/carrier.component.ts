import { Component, OnInit } from '@angular/core';
import {map} from "rxjs/operators";
import {ActivatedRoute} from "@angular/router";
import {CarrierGQL} from "../../../../generated/graphql";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-carrier',
  templateUrl: './carrier.component.html',
  styleUrls: ['./carrier.component.scss']
})
export class CarrierComponent implements OnInit {
  carrier;
  constructor(private activatedRouter: ActivatedRoute, private carrierGQL: CarrierGQL,
              translate: TranslateService) {
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
