import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {PaymentOrdersGQL} from '../../../../generated/graphql';
import {ValidatePaymentGQL} from "../../../../generated/mutation/graphql";
import {TranslateService} from '@ngx-translate/core';
import {StorageService} from '../../../../core/service/storage.service';

@Component({
  selector: 'app-validate-payment-dialog',
  templateUrl: './validate-payment-dialog.component.html',
  styleUrls: ['./validate-payment-dialog.component.scss']
})
export class ValidatePaymentDialogComponent implements OnInit {
  transactionId = {
    control: '',
    error: false
  };
  paymentOrder = null;
  constructor(
    private formBuilder: FormBuilder,
    private matDialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private validatePaymentGQL: ValidatePaymentGQL,
    translate: TranslateService , private storage: StorageService) {
    translate.use(this.storage.getLanguage('lang'));
  }

  ngOnInit(): void {
    this.paymentOrder = this.data;
  }
  onChange(value: any): void {
     this.transactionId.error = (value !== this.paymentOrder.transactionId);
  }

  confirm($verification: boolean): void {
    const input = {
      paymentOrderId: this.paymentOrder.id,
      verification: $verification
    };
    this.validatePaymentGQL.mutate({ input: input}).subscribe(
      (order) => {
        this.matDialogRef.close(order);
      }
    );
  }

}
