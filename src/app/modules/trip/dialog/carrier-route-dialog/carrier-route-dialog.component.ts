import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-carrier-route-dialog',
  templateUrl: './carrier-route-dialog.component.html',
  styleUrls: ['./carrier-route-dialog.component.scss']
})
export class CarrierRouteDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public matDialogRef: MatDialogRef<any>) { }

  ngOnInit(): void {
  }

}
