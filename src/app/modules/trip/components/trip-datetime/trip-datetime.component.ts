import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-trip-datetime',
  templateUrl: './trip-datetime.component.html',
  styleUrls: ['./trip-datetime.component.scss']
})
export class TripDatetimeComponent implements OnInit {
  @Input() trip;
  constructor() { }

  ngOnInit(): void {
  }

}
