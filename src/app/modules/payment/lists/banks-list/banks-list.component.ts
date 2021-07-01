import { Component, OnInit } from '@angular/core';
import {BankAccountsGQL, CitiesGQL} from "../../../../generated/graphql";
import {echo} from "../../../../util/print";

@Component({
  selector: 'app-banks-list',
  templateUrl: './banks-list.component.html',
  styleUrls: ['./banks-list.component.scss']
})
export class BanksListComponent implements OnInit {

  bankAccounts: any;
  breakpoint: any;

  constructor( private bankAccountsGQL: BankAccountsGQL, private city: CitiesGQL) {
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


}
