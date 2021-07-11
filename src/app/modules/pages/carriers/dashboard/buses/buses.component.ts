import { Component, OnInit } from '@angular/core';
import {map} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';
import {CarrierGQL} from '../../../../../generated/graphql';

@Component({
  selector: 'app-buses',
  templateUrl: './buses.component.html',
  styleUrls: ['./buses.component.scss']
})
export class BusesComponent implements OnInit {
  carrier;
  carrierId;
  constructor(private activatedRoute: ActivatedRoute, private carrierGQL: CarrierGQL, private router: Router) {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.carrierId = params.id;
        this.carrierGQL
          .watch({id: this.carrierId, getTrips: false}).valueChanges
          .pipe(map((response) => response.data.carrier))
          .subscribe(
            (carrier) => this.carrier = carrier
          );
      }
    );
  }

  ngOnInit(): void {
  }

  busSelected(bus: any): void {
    this.router.navigate(['/bus/' + bus.id]);
  }
}
