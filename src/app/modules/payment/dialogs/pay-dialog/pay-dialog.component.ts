import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {echo} from '../../../../util/print';

@Component({
  selector: 'app-pay-dialog',
  templateUrl: './pay-dialog.component.html',
  styleUrls: ['./pay-dialog.component.scss']
})
export class PayDialogComponent implements OnInit {

  constructor( @Inject(MAT_DIALOG_DATA) public data: any, public matDialogRef: MatDialogRef<any>) { }

  ngOnInit(): void {
    echo(this.data);
  }

}
