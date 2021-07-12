import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {PaymentOrdersGQL} from '../../../../generated/graphql';
import {ValidatePaymentGQL} from "../../../../generated/mutation/graphql";
import {TranslateService} from '@ngx-translate/core';
import {StorageService} from '../../../../core/service/storage.service';
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-validate-payment-dialog',
  templateUrl: './validate-payment-dialog.component.html',
  styleUrls: ['./validate-payment-dialog.component.scss']
})
export class ValidatePaymentDialogComponent implements OnInit {
  transactionId = {
    control: '',
    error: null
  };
  paymentOrder = null;
  loading = false;
  constructor(
    private formBuilder: FormBuilder,
    private matDialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private validatePaymentGQL: ValidatePaymentGQL,
    private matSnackBar: MatSnackBar,
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
    this.loading = true;
    this.validatePaymentGQL.mutate({ input: input}).subscribe(
      (order) => {
        this.matSnackBar.open('Payment verified', null, {duration: 3000});
        this.matDialogRef.close(order);
        this.loading = false;
      }
    );
  }

}
