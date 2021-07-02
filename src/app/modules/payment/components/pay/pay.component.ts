import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.scss']
})
export class PayComponent implements OnInit {
  @Input() bank;
  constructor() { }

  ngOnInit(): void {
  }

}
