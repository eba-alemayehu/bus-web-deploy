import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-trip-driver-or-assistant-add-dialog',
  templateUrl: './trip-driver-or-assistant-add-dialog.component.html',
  styleUrls: ['./trip-driver-or-assistant-add-dialog.component.scss']
})
export class TripDriverOrAssistantAddDialogComponent implements OnInit {

  constructor(private matDialogRef: MatDialogRef<any>) { }

  ngOnInit(): void {
  }

  add(user): void {
    this.matDialogRef.close(user);
  }
}
