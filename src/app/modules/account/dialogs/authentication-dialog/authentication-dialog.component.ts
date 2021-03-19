import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-authentication-dialog',
  templateUrl: './authentication-dialog.component.html',
  styleUrls: ['./authentication-dialog.component.scss']
})
export class AuthenticationDialogComponent implements OnInit {

  constructor(private matDialogRef: MatDialogRef<any>) { }

  ngOnInit(): void {
  }

  close(): void {
    this.matDialogRef.close();
  }
}
