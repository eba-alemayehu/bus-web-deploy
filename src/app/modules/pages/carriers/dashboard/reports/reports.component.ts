import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TripGQL} from '../../../../../generated/graphql';
import {map, tap} from 'rxjs/operators';
import {echo} from '../../../../../util/print';
import {TranslateService} from '@ngx-translate/core';
import {StorageService} from '../../../../../core/service/storage.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  fileName: string;
  // TODO: trip id
  constructor(public activatedRoute: ActivatedRoute, private tripGQL: TripGQL,
              translate: TranslateService , private storageService: StorageService) {
    translate.use(this.storageService.getLanguage('lang'));
    this.activatedRoute.params.subscribe(
      (params) => {
        echo(params.id);
        this.tripGQL.watch({id: 'VHJpcE5vZGU6MzQwMg=='}).valueChanges.pipe(
          map(response => response.data.trip)).subscribe(
          (trip) => {
            echo(trip);
            this.fileName = `${trip.route.leavingFrom.name}-to-${trip.route.destination.name}-${trip.departureTime}.xlsx`;
            echo(this.fileName);
          }
        );
      }
    );
  }

  ngOnInit(): void {
  }

}
