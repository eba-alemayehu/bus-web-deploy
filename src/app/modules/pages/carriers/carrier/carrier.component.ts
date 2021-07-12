import {Component, OnInit} from '@angular/core';
import {map} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import {CarrierGQL} from '../../../../generated/graphql';
import {TranslateService} from '@ngx-translate/core';
import {CarrierGuard} from '../../../../guards/auth/carrier.guard';
import {StorageService} from '../../../../core/service/storage.service';

@Component({
  selector: 'app-carrier',
  templateUrl: './carrier.component.html',
  styleUrls: ['./carrier.component.scss']
})
export class CarrierComponent implements OnInit {
  carrier;

  constructor(
    public activatedRouter: ActivatedRoute,
    private carrierGQL: CarrierGQL,
    public carrierGuard: CarrierGuard,
    translate: TranslateService , private storageService: StorageService
  ) {
    translate.use(this.storageService.getLanguage('lang'));
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
