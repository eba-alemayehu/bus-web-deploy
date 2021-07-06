import {Component, Input, OnInit} from '@angular/core';
import {CarrierNode, CarriersGQL, CarriersQuery} from '../../../generated/graphql';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-carrier-list',
  templateUrl: './carrier-list.component.html',
  styleUrls: ['./carrier-list.component.scss']
})
export class CarrierListComponent implements OnInit {
  @Input() carriers$: Observable<any>;
  @Input() loading = false;

  constructor(private carriersGQL: CarriersGQL) {
    this.carriers$ = carriersGQL
      .watch({getTrips: false}).valueChanges
      .pipe(
        map(response => response.data.carriers.edges),
        tap(response => this.loading = response.loading),
      );
  }

  ngOnInit(): void {
  }

}
