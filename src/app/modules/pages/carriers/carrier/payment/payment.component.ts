import {Component, OnInit} from '@angular/core';

import {MatDialog} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ValidatePaymentDialogComponent} from '../../../../payment/dialogs/validate-payment-dialog/validate-payment-dialog.component';
import {PaymentOrdersGQL} from '../../../../../generated/graphql';
import {map} from 'rxjs/operators';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  newPaymentOrders;
  verfiedPaymentOrders;
  deniedPaymentOrders;

  constructor(
    private paymentOrdersGQL: PaymentOrdersGQL,
    private matDialog: MatDialog,
    private matSnackBar: MatSnackBar,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        const carrier = params.id;
        this.paymentOrdersGQL.watch({bankAccount_Carrier: carrier}).valueChanges
          .pipe(
            map(({data}) => data.paymentOrders.edges)
          )
          .subscribe(
            (orders) => this.newPaymentOrders = orders
          );
        this.paymentOrdersGQL.watch({isChecked: true, verified: true, bankAccount_Carrier: carrier}).valueChanges
          .pipe(
            map(({data}) => data.paymentOrders.edges)
          ).subscribe(
          (orders) => this.verfiedPaymentOrders = orders
        );
        this.paymentOrdersGQL.watch({isChecked: true, verified: false, bankAccount_Carrier: carrier}).valueChanges
          .pipe(
            map(({data}) => data.paymentOrders.edges)
          ).subscribe(
          (orders) => this.deniedPaymentOrders = orders
        );
      }
    );

  }

  validate(order): void {
    this.matDialog.open(ValidatePaymentDialogComponent, {
      width: '380px',
      data: order
    }).afterClosed().subscribe(
      (response) => {
        if (response.isChecked) {
          this.matSnackBar.open('Payment order is ' + response.verification ? 'verified' : 'denied', '', {
            duration: 3000
          });
          this.newPaymentOrders = this.newPaymentOrders.filter(
            (e) => {
              return (e.node.id !== response.id);
            }
          );
        }
      }
    );
  }
}
