import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-pay-dialog',
  templateUrl: './pay-dialog.component.html',
  styleUrls: ['./pay-dialog.component.scss']
})
export class PayDialogComponent implements OnInit {

  constructor( @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
