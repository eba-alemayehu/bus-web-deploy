import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CarrierNode, CarriersGQL, CarriersQuery} from '../../../generated/graphql';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {Router} from "@angular/router";
import {emit} from "cluster";

@Component({
  selector: 'app-carrier-list',
  templateUrl: './carrier-list.component.html',
  styleUrls: ['./carrier-list.component.scss']
})
export class CarrierListComponent implements OnInit {
  @Input() carriers$: Observable<any>;
  @Input() loading = true;
  @Input() goto = null;
  @Output() onSelect: EventEmitter<any> = new EventEmitter();

  constructor(private carriersGQL: CarriersGQL, private router: Router) {
    this.carriers$ = carriersGQL
      .watch({getTrips: false}).valueChanges
      .pipe(
        tap(response => this.loading = response.loading),
        map(response => response.data.carriers.edges),
      );
  }

  ngOnInit(): void {
  }

  onCarrierClick(carrier: any): any {
    if (this.goto !== null){
      this.router.navigate([this.goto + carrier.node.id]);
    }
    this.onSelect.emit(carrier.noe);
  }
}
