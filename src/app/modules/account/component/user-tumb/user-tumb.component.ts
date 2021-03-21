import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-tumb',
  templateUrl: './user-tumb.component.html',
  styleUrls: ['./user-tumb.component.scss']
})
export class UserTumbComponent implements OnInit {
  @Input() user;
  constructor() { }

  ngOnInit(): void {
  }

}
