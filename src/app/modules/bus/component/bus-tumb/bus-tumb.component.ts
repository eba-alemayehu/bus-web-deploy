import {Component, Input, OnInit} from '@angular/core';
import {BusNode, BusNodeEdge} from '../../../../generated/graphql';
import {TranslateService} from '@ngx-translate/core';
import {StorageService} from '../../../../core/service/storage.service';

@Component({
  selector: 'app-bus-tumb',
  templateUrl: './bus-tumb.component.html',
  styleUrls: ['./bus-tumb.component.scss']
})
export class BusTumbComponent implements OnInit {
  @Input() bus: BusNode| any;
  @Input() row = false;
  @Input() add = false;
  @Input() loading = false;

  constructor(translate: TranslateService , private storage: StorageService) {
    translate.use(this.storage.getLanguage('lang'));
  }

  ngOnInit(): void {
  }

}
