import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CarrierGQL, CarrierQuery} from '../../../../../../generated/graphql';
import {map} from 'rxjs/operators';
import {echo} from '../../../../../../util/print';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public carrier;

  constructor(private activatedRoute: ActivatedRoute, private carrierGQL: CarrierGQL, private router: Router) {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.carrierGQL.watch({id: params.id, getTrips: false}).valueChanges.pipe(map(response => response.data.carrier)).subscribe(
          (carrier) => this.carrier = carrier
        );
      }
    );
  }

  ngOnInit(): void {
  }

  submitted(trip): void{
    echo(trip);
    this.router.navigate(['/trip/bulk ref/' + trip.bulkRef]);
  }
}
