import { Component, OnInit } from '@angular/core';
import {StorageService} from '../../core/service/storage.service';
import {TranslateService} from '@ngx-translate/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  constructor(
    public translate: TranslateService,
    private storageService: StorageService,
    public router: Router
  ) {
    translate.use(this.storageService.getLanguage('lang'));
  }

  ngOnInit(): void {
  }

}
