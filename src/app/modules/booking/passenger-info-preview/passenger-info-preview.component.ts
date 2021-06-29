import { Component, OnInit, Input } from '@angular/core';
import {echo} from '../../../util/print';

@Component({
  selector: 'app-passenger-info-preview',
  templateUrl: './passenger-info-preview.component.html',
  styleUrls: ['./passenger-info-preview.component.scss']
})
export class PassengerInfoPreviewComponent implements OnInit {
  @Input() data;
  constructor() { }

  ngOnInit(): void {
    echo(this.data);
  }

}
