import {Component, Input, OnInit} from '@angular/core';
import {CarrierNode, CarrierNodeEdge} from '../../../../generated/graphql';

@Component({
  selector: 'app-carrier-tumb',
  templateUrl: './carrier-tumb.component.html',
  styleUrls: ['./carrier-tumb.component.scss']
})
export class CarrierTumbComponent implements OnInit {
  @Input() carrier: CarrierNodeEdge;
  constructor() { }

  ngOnInit(): void {
  }

}
