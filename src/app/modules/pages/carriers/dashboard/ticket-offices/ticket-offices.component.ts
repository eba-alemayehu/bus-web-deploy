import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TranslateService} from '@ngx-translate/core';
import {StorageService} from '../../../../../core/service/storage.service';

@Component({
  selector: 'app-ticket-offices',
  templateUrl: './ticket-offices.component.html',
  styleUrls: ['./ticket-offices.component.scss']
})
export class TicketOfficesComponent implements OnInit {

  constructor(public activatedRoute: ActivatedRoute,
              translate: TranslateService , private storageService: StorageService
  ) {
    translate.use(this.storageService.getLanguage('lang'));
  }

  ngOnInit(): void {
  }

}
