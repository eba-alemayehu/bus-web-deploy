import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-custom-shimmer',
  template: `
    <div [ngStyle]="getStyle()" class="shimmer">
    </div>
  `,
  styleUrls: ['./custom-shimmer.component.scss']
})
export class CustomShimmerComponent implements OnInit {

  @Input() height: number;
  @Input() width: number;
  @Input() circle: boolean;
  @Input() color: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  getStyle = () => {
    return {
      'width.px': this.width ? this.width : '',
      'height.px': this.height ? this.height : '',
      'border-radius': this.circle ? '50%' : '',
      'background-color': this.color ? this.color : ''
    };
  }

}
