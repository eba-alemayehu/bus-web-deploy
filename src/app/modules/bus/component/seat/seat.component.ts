import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

enum Orientation {
  ROW = 'row',
  COLUMN = 'column',
}

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.scss']
})
export class SeatComponent implements OnInit, OnChanges {
  @Input() orientation = Orientation.ROW;
  @Input() name;
  @Input() loading = false;
  @Input('state') set state(value) {
    this.style.fill = 'url(#' + value + ')';
  }

  style: any = {
    'width.px': 36,
    fill: 'url(#available)',
  };

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.orientation === Orientation.ROW) {
      if (this.orientation === Orientation.ROW) {
        this.style.transform = 'rotate(-90deg)';
      }
    }
  }
}
