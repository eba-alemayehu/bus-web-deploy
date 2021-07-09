import { Component, OnInit } from '@angular/core';
import {MyTicketGQL} from '../../../../generated/graphql';
import {ActivatedRoute} from '@angular/router';
import {echo} from '../../../../util/print';

@Component({
  selector: 'app-ticket-detail-page',
  templateUrl: './ticket-detail-page.component.html',
  styleUrls: ['./ticket-detail-page.component.scss']
})
export class TicketDetailPageComponent implements OnInit {
  ticket: any;
  loading;


  constructor(private activatedRoute: ActivatedRoute, private myTicket: MyTicketGQL) {
    this.activatedRoute.params.subscribe((params) => {
      echo(params.id);
      myTicket.watch({ id: params.id}).valueChanges.subscribe(
        (response) => {
          echo(response);
          this.ticket = response.data.ticket;
          this.loading = response.loading;
        });
    });
  }

  ngOnInit(): void {
    this.loading = true;
  }

}
