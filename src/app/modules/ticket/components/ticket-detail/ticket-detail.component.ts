import {Component, Inject, OnInit, Input} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {echo} from '../../../../util/print';
import {TranslateService} from '@ngx-translate/core';
import {StorageService} from '../../../../core/service/storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.scss']
})
export class TicketDetailComponent implements OnInit {

  @Input() ticket;
  @Input() loading;

  constructor( private router: Router, translate: TranslateService , private storage: StorageService) {
    translate.use(this.storage.getLanguage('lang'));
  }

  payNow(): void{
     this.router.navigate(['/booking/payment/' + this.ticket.order.id]);
  }

  ngOnInit(): void {
  }

}
