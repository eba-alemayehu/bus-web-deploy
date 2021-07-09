import { Component, OnInit } from '@angular/core';
import {echo} from '../../../util/print';
import {Router} from '@angular/router';
import {$} from 'protractor';
import {TranslateService} from '@ngx-translate/core';
import {StorageService} from '../../../core/service/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public router: Router, translate: TranslateService , private storage: StorageService) {
    translate.use(this.storage.getLanguage('lang'));
  }

  ngOnInit(): void {
  }

  search(query: any): void {
    this.router.navigate(['trip/search/'], {
      queryParams: query
    });
  }
  searchFromRoute(route): void{
    this.search({
      leavingFrom: route.leavingFrom.id,
      destination: route.destination.id,
    });
  }
}
