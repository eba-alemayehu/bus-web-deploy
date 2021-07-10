import { Component, OnInit, Input } from '@angular/core';
import {BankAccountsGQL, CitiesGQL} from '../../../../generated/graphql';
import {echo} from '../../../../util/print';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  orderId: any;
  bankAccounts: any;
  breakpoint: any;

  constructor(
    private bankAccountsGQL: BankAccountsGQL,
    private city: CitiesGQL,
    private route: Router,
    private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      this.orderId = params;
    });
    this.bankAccountsGQL.watch({}).valueChanges.subscribe(
      (response) => {
        this.bankAccounts = response.data.bankAccounts.edges;
        echo(this.bankAccounts);
      });
  }

  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= 1200) ? 1 : 4;
  }

  onResize = (event) => {
    this.breakpoint = (event.target.innerWidth <= 1200) ? 1 : 4;
  }
  payLater(): void {
    this.route.navigate(['/booking/success'], { queryParamsHandling: 'merge' });
  }
}
