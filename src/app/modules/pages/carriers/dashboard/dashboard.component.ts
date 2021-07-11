import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/operators';
import {CarrierGQL, CarrierNode} from '../../../../generated/graphql';
import {Observable} from 'rxjs';
import {TranslateService} from '@ngx-translate/core';
import {StorageService} from '../../../../core/service/storage.service';

@Component({
  selector: 'app-carrier-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  carrier: any;

  constructor(private activatedRouter: ActivatedRoute, private carrierGQL: CarrierGQL,
              translate: TranslateService , private storage: StorageService) {
    translate.use(this.storage.getLanguage('lang'));
    this.activatedRouter.params.subscribe(
      (params) => {
        this.carrierGQL
          .watch({id: params.id, getTrips: false}).valueChanges
          .pipe(map((response) => response.data.carrier))
          .subscribe(
            (carrier) => this.carrier = carrier
          );
      }
    );
  }

  ngOnInit(): void {
  }

}
