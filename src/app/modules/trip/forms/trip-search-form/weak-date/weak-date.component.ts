import { Component, OnInit, Input } from '@angular/core';
import moment from 'moment';

@Component({
  selector: 'app-weak-date',
  templateUrl: './weak-date.component.html',
  styleUrls: ['./weak-date.component.scss']
})
export class WeakDateComponent implements OnInit {
  constructor() { }

  getWeakDays = (length: number) => {
    const days = [];
    for (let i = 0; i < length; i++){
      days.push({
        day: moment().add(i, 'days').format('dddd').slice(0, 3).toUpperCase(),
        dateNum: moment().add(i, 'days').format('Do'),
        date: moment().add(i, 'days').toDate(),
      });
    }
    return days;
  }

   changeDepartureDate = () => {
    console.log('it works');
  }

  ngOnInit(): void {
  }

}
