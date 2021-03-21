import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {echo} from '../../../../util/print';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-trip-driver-or-assistant-add-form',
  templateUrl: './trip-driver-or-assistant-add-form.component.html',
  styleUrls: ['./trip-driver-or-assistant-add-form.component.scss']
})
export class TripDriverOrAssistantAddFormComponent implements OnInit {
  selectedUser = null;
  @Output() addUser: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  userSelected(user: any): void {
    this.selectedUser = user;
  }

  add(): void {
    this.addUser.emit(this.selectedUser);
  }
}
