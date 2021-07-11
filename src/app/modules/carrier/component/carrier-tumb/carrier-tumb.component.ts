import {Component, Input, OnInit} from '@angular/core';
import {CarrierNode, CarrierNodeEdge} from '../../../../generated/graphql';

@Component({
  selector: 'app-carrier-tumb',
  templateUrl: './carrier-tumb.component.html',
  styleUrls: ['./carrier-tumb.component.scss']
})
export class CarrierTumbComponent implements OnInit {
  @Input() carrier: CarrierNode;
  @Input() loading = false;
  @Input() size = 'small';

  constructor() { }

  ngOnInit(): void {
  }

}
