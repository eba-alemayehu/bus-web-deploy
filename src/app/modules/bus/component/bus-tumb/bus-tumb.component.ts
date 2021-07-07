import {Component, Input, OnInit} from '@angular/core';
import {BusNode, BusNodeEdge} from '../../../../generated/graphql';

@Component({
  selector: 'app-bus-tumb',
  templateUrl: './bus-tumb.component.html',
  styleUrls: ['./bus-tumb.component.scss']
})
export class BusTumbComponent implements OnInit {
  @Input() bus: BusNode| any;
  @Input() row = false;
  @Input() add = false;
  @Input() loading = false;

  constructor() { }

  ngOnInit(): void {
  }

}
