import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BusesGQL} from '../../../../generated/graphql';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-bus-list',
  templateUrl: './bus-list.component.html',
  styleUrls: ['./bus-list.component.scss']
})
export class BusListComponent implements OnInit {
  @Input() carrier;
  @Input() busSeatConfiguration;
  @Output() selected: EventEmitter<any> = new EventEmitter<any>();
  buses$: Observable<any>;
  constructor(private busesGQL: BusesGQL) {
  }

  ngOnInit(): void {
    this.buses$ = this.busesGQL
      .watch({carrier: this.carrier?.id}).valueChanges
      .pipe(map(response => response.data.buses.edges));
  }

  _selected(bus: any): void {
    this.selected.emit(bus);
  }
}
