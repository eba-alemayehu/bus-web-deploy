import { Component, OnInit } from '@angular/core';
import {BusesGQL} from '../../../../../generated/graphql';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-tracking-map',
  templateUrl: './tracking-map.component.html',
  styleUrls: ['./tracking-map.component.scss']
})
export class TrackingMapComponent implements OnInit {
  zoom = 8;

  lat = 9.005401;
  lng = 38.763611;

  buses$;
  constructor(private busesGQL: BusesGQL, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.buses$ = this.busesGQL.watch({
      carrier: this.activatedRoute.snapshot.params.id
    }, {
      pollInterval: 3000,
    }).valueChanges.pipe(map(response => response.data.buses.edges.map(e => e.node)));
  }

}
