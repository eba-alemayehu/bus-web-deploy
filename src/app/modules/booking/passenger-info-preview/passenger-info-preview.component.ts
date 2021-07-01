import {Component, OnInit, Input, Inject} from '@angular/core';
import {echo} from '../../../util/print';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-passenger-info-preview',
  templateUrl: './passenger-info-preview.component.html',
  styleUrls: ['./passenger-info-preview.component.scss']
})
export class PassengerInfoPreviewComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    echo(this.data);
  }

}
