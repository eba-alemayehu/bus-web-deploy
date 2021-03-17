import { Component, OnInit } from '@angular/core';
import {echo} from '../../../util/print';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  search($event: any): void {
    echo($event);
  }
}
