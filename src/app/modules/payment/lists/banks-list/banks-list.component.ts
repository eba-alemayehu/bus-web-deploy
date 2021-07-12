import { Component, OnInit, Input } from '@angular/core';
import {BankAccountsGQL, CitiesGQL} from '../../../../generated/graphql';
import {echo} from '../../../../util/print';
import {Router} from '@angular/router';

@Component({
  selector: 'app-banks-list',
  templateUrl: './banks-list.component.html',
  styleUrls: ['./banks-list.component.scss']
})
export class BanksListComponent implements OnInit {
  @Input() orderId;
  bankAccounts: any;
  breakpoint: any;
  loading;

  constructor( private route: Router, private bankAccountsGQL: BankAccountsGQL, private city: CitiesGQL) {
    this.bankAccountsGQL.watch({}).valueChanges.subscribe(
      (response) => {
        this.bankAccounts = response.data.bankAccounts.edges;
        this.loading = response.loading;
        echo(this.bankAccounts);
      });
  }

  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= 1200) ? 1 : 3;
    this.loading = true;
  }

  onResize(event): void {
    this.breakpoint = (event.target.innerWidth <= 1200) ? 1 : 3;
  }
}
