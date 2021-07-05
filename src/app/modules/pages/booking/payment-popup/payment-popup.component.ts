import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {echo} from '../../../../util/print';

@Component({
  selector: 'app-payment-popup',
  templateUrl: './payment-popup.component.html',
  styleUrls: ['./payment-popup.component.scss']
})
export class PaymentPopupComponent implements OnInit {

  constructor( @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    echo(this.data);
  }

}
