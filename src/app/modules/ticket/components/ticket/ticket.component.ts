import { Component, OnInit, Input } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {TicketDetailComponent} from '../ticket-detail/ticket-detail.component';
import {TranslateService} from '@ngx-translate/core';
import {StorageService} from '../../../../core/service/storage.service';
import {echo} from '../../../../util/print';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {
  @Input() ticket;
  @Input() loading;

  constructor( public router: Router, translate: TranslateService , private storage: StorageService) {
    translate.use(this.storage.getLanguage('lang'));
  }
  ticketDetail = () => {
    echo('clicked');
    this.router.navigate(['/ticket/' + this.ticket.id ]);
  }
  ngOnInit(): void {
  }

}
