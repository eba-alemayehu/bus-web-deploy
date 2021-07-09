import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {echo} from '../../../../../util/print';
import {StorageService} from "../../../../../core/service/storage.service";

@Component({
  selector: 'app-weak-date',
  templateUrl: './weak-date.component.html',
  styleUrls: ['./weak-date.component.scss']
})
export class WeakDateComponent implements OnInit {
  @Output() dateChanged: EventEmitter<any> = new EventEmitter();
  @Input() startDate = new Date();
  @Input() length = 5;
  days = [];

  constructor(private storage: StorageService) {
  }

  getWeakDays = () => {
    for (let i = 0; i < this.length; i++) {
      const date = this.addDay(this.startDate, i);
      this.days.push({
        day: new Intl.DateTimeFormat(this.storage.getLanguage('lang'), {weekday: 'short'}).format(date),
        dateNum: new Intl.DateTimeFormat(this.storage.getLanguage('lang'), {day: 'numeric'}).format(date),
        date: date,
      });
    }
  }

  changeDepartureDate = (selectedDate) => {
    this.dateChanged.emit(selectedDate);
  }

  ngOnInit(): void {
    this.getWeakDays();
  }

  addDay(date, days: number): any {
    const ms = date.getTime() + (86400000 * days);
    return new Date(ms);
  }
}
