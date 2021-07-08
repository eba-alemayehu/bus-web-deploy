import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ChangeTripBusMutationGQL, TripGQL} from '../../../generated/graphql';
import {map, tap} from 'rxjs/operators';
import {MatDialog} from '@angular/material/dialog';
import {SelectBusDialogComponent} from '../../bus/dialog/select-bus-dialog/select-bus-dialog.component';
import {TranslateService} from '@ngx-translate/core';
import {StorageService} from '../../../core/service/storage.service';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.scss']
})
export class TripComponent implements OnInit {
  @Input() loading = true;

  fileName: string;

  public trip: any;

  constructor(private activatedRoute: ActivatedRoute, private tripGQL: TripGQL,
              private matDialog: MatDialog, private changeTripBusMutation: ChangeTripBusMutationGQL,
              translate: TranslateService, private storage: StorageService) {
    translate.use(this.storage.getLanguage('lang'));
    this.activatedRoute.params.subscribe(
      (params) => {
        this.tripGQL.watch({id: params.id}).valueChanges.pipe(
          tap(response => this.loading = response.loading),
          map(response => response.data.trip)).subscribe(
          (trip) => {
            this.trip = trip;
            this.fileName = `${trip.route.leavingFrom.name}-to-${trip.route.destination.name}-${trip.departureTime}.xlsx`;
          }
        );
      }
    );
  }

  ngOnInit(): void {
  }

  addBus(): void {
    this.matDialog.open(SelectBusDialogComponent, {
      data: {
        carrier: this.trip.carrier,
        busSeatConfiguration: this.trip.busSeatConfiguration,
      }
    }).afterClosed().subscribe(
      (bus) => {
        const {...$trip} = this.trip;
        $trip.bus = bus;
        this.trip = $trip;
        this.changeTripBusMutation
          .mutate({input: {trip: this.trip.id, bus: bus.id}})
          .pipe(map(response => response.data.changeTripBus.trip))
          .subscribe(
            (trip) => {
              this.trip = trip;
            }
          );
      }
    );
  }
}
