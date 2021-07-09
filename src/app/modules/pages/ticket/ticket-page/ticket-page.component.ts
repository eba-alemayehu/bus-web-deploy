import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {MyTicketsGQL, TicketsGQL} from '../../../../generated/graphql';
import {echo} from '../../../../util/print';
import {TranslateService} from '@ngx-translate/core';
import {StorageService} from '../../../../core/service/storage.service';

@Component({
  selector: 'app-ticket-page',
  templateUrl: './ticket-page.component.html',
  styleUrls: ['./ticket-page.component.scss']
})
export class TicketPageComponent implements OnInit {
  tickets: any;
  loading: boolean;
  // @Output() loading = new EventEmitter<boolean>(true);
  constructor( private myTickets: MyTicketsGQL, translate: TranslateService , private storage: StorageService ) {
    translate.use(this.storage.getLanguage('lang'));
    this.myTickets.watch().valueChanges.subscribe((tickets) => {
        echo(tickets.data.myTickets.edges);
        this.tickets = tickets.data.myTickets.edges;
        this.loading = false;
      }
    );
  }

  ngOnInit(): void {
    this.loading = true;
  }

}
