import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-stat',
  templateUrl: './main-stat.component.html',
  styleUrls: ['./main-stat.component.scss']
})
export class MainStatComponent implements OnInit {
  @Input() icon;
  @Input() title;
  @Input() subText;
  @Input() iconClass;
  constructor() { }

  ngOnInit(): void {
  }

}
