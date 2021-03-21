import {Component, Input, OnInit} from '@angular/core';
import {TripNodeEdge} from '../../../../generated/graphql';

@Component({
  selector: 'app-trip-list-item',
  templateUrl: './trip-list-item.component.html',
  styleUrls: ['./trip-list-item.component.scss']
})
export class TripListItemComponent implements OnInit {
  @Input() trip: any;
  constructor() { }

  ngOnInit(): void {
  }

}
