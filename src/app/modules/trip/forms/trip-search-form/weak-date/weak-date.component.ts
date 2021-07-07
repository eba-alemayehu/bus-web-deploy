import { Component, OnInit, Input } from '@angular/core';
import moment from 'moment';
import {echo} from '../../../../../util/print';

@Component({
  selector: 'app-weak-date',
  templateUrl: './weak-date.component.html',
  styleUrls: ['./weak-date.component.scss']
})
export class WeakDateComponent implements OnInit {
  days = [];

  constructor() { }

  getWeakDays = (length: number = 5 ) => {
    for (let i = 0; i < length; i++) {
      this.days.push({
        day: moment().add(i, 'days').format('dddd').slice(0, 3).toUpperCase(),
        dateNum: moment().add(i, 'days').format('Do'),
        date: moment().add(i, 'days').toDate(),
      });
    }
  }

   changeDepartureDate = (selectedDate, $event) => {
     $event.preventDefault();
     echo(selectedDate);
  }

  ngOnInit(): void {
    this.getWeakDays();
  }

}
