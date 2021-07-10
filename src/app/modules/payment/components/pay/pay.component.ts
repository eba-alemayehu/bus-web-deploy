import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {echo} from '../../../../util/print';
import {PaymentConfirmationRequestGQL} from '../../../../generated/mutation/graphql';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {StorageService} from '../../../../core/service/storage.service';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.scss']
})
export class PayComponent implements OnInit {
  @Input() bank;
  @Input() orderId;
  @Output() close: EventEmitter<any> = new EventEmitter<any>();
  transactionForm = this.formBuilder.group({
    transactionId: ['', Validators.required],
  });
  loading: boolean;
  // tslint:disable-next-line:max-line-length
  constructor(private formBuilder: FormBuilder, public matDialogRef: MatDialogRef<any>, private router: Router, private paymentConfirmationRequestMutation: PaymentConfirmationRequestGQL,
              translate: TranslateService , private storage: StorageService) {
    translate.use(this.storage.getLanguage('lang'));
  }

  ngOnInit(): void {
    this.close.emit(false);
  }

  submit(): void {
    if (!this.transactionForm.valid) { return; }
    this.paymentConfirmationRequestMutation.mutate( {
      input: {
        paymentOrderId: this.orderId.orderId,
        bankAccountId: this.bank.id,
        transactionId: this.transactionForm.value.transactionId,
      }
    }).subscribe(
      (response) => {
        echo(response.data);
        this.close.emit(true);
        this.router.navigate(['booking/success']);
      }
    );
  }

}
