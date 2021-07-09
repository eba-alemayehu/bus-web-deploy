import {Component, Input, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-delete-trip-dialog',
  templateUrl: './delete-trip.component.html',
  styleUrls: ['./delete-trip.component.scss']
})
export class DeleteTripComponent implements OnInit {

  @Input() tripId;
  constructor(private matDialogRef: MatDialogRef<any>) { }

  ngOnInit(): void {
  }

  delete(): void {
    console.log('test delete');
  }
  cancel(): void{
    this.matDialogRef.close();
  }
}
