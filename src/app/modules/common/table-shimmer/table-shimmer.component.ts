import {Component, Input, OnInit} from '@angular/core';



@Component({
  selector: 'app-table-shimmer',
  templateUrl: './table-shimmer.component.html',
  styleUrls: ['./table-shimmer.component.scss']
})
export class TableShimmerComponent implements OnInit {
  @Input() width: any;
  @Input() height: any;
  @Input() rows: any;
  @Input() columns: any;

  constructor() { }

  ngOnInit(): void {
  }

}
