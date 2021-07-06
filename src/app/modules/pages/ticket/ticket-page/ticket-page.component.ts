import { Component, OnInit } from '@angular/core';
import {MyTicketsGQL, TicketsGQL} from '../../../../generated/graphql';
import {echo} from '../../../../util/print';

@Component({
  selector: 'app-ticket-page',
  templateUrl: './ticket-page.component.html',
  styleUrls: ['./ticket-page.component.scss']
})
export class TicketPageComponent implements OnInit {
  tickets: any;

  constructor( private myTickets: MyTicketsGQL ) {
    this.myTickets.watch().valueChanges.subscribe((tickets) => {
        echo(tickets.data.myTickets.edges);
        this.tickets = tickets.data.myTickets.edges;
      }
    );
  }

  ngOnInit(): void {
  }

}
