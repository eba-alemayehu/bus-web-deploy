import {Component, Input, OnInit} from '@angular/core';
import {echo} from '../../../../util/print';
import {MatDialog} from '@angular/material/dialog';
import {PaymentPopupComponent} from '../../../pages/booking/payment-popup/payment-popup.component';
import {PayDialogComponent} from '../../dialogs/pay-dialog/pay-dialog.component';

@Component({
  selector: 'app-bank-card',
  templateUrl: './bank-card.component.html',
  styleUrls: ['./bank-card.component.scss']
})
export class BankCardComponent implements OnInit {
  @Input() bank;
  @Input() loading;
  @Input() orderId;
  constructor(public dialog: MatDialog, ) {
  }


  ngOnInit(): void {
  }

  openDialog = () =>  {
    const dialogRef = this.dialog.open(PayDialogComponent, {data: {bank: this.bank, orderId: this.orderId}});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  selectedBank = (bank: any) => {
    this.openDialog();
  }

  // copyBankAccount = (num: string) => {
  //    this.clipBoard.readText(num);
  // }

}
