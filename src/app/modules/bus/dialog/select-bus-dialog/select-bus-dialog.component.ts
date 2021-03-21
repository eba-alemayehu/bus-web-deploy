import { Component, OnInit, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-select-bus-dialog',
  templateUrl: './select-bus-dialog.component.html',
  styleUrls: ['./select-bus-dialog.component.scss']
})
export class SelectBusDialogComponent implements OnInit {

  constructor(private matDialogRef: MatDialogRef<any>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  onBusSelected(bus: any): void{
    this.matDialogRef.close(bus);
  }
}
