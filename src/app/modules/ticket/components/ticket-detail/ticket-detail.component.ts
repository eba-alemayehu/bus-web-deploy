import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {echo} from "../../../../util/print";
import {TranslateService} from '@ngx-translate/core';
import {StorageService} from '../../../../core/service/storage.service';

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.scss']
})
export class TicketDetailComponent implements OnInit {

  ticket: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, translate: TranslateService , private storage: StorageService) {
    translate.use(this.storage.getLanguage('lang'));
  }

  ngOnInit(): void {
    this.ticket = this.data.ticket;
    echo('passed data');
    echo(this.data);
  }

}
