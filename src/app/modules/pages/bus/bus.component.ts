import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BusDriverMutationGQL, BusGQL} from '../../../generated/graphql';
import {map} from 'rxjs/operators';
import {MatDialog} from '@angular/material/dialog';
import {TripDriverOrAssistantAddDialogComponent} from '../../trip/dialog/trip-driver-or-assistant-add-dialog/trip-driver-or-assistant-add-dialog.component';
import {echo} from '../../../util/print';
import {TranslateService} from '@ngx-translate/core';
import {StorageService} from '../../../core/service/storage.service';

@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.scss']
})
export class BusComponent implements OnInit {
  bus;
  busQueryWatch;
  private busId: string;
  constructor(
    private activatedRote: ActivatedRoute,
    private busGQL: BusGQL,
    private matDialog: MatDialog,
    private busDriverMutation: BusDriverMutationGQL,
    translate: TranslateService , private storage: StorageService) {
    translate.use(this.storage.getLanguage('lang'));
    this.activatedRote.params.subscribe(
      (params) => {
        this.busId = params.id;
        this.getBus();
      }
    );
  }

  private getBus(): void {
    this.busQueryWatch = this.busGQL.watch({id: this.busId}).valueChanges.pipe(map(response => response.data.bus)).subscribe(
      (bus) => {
        this.bus = bus;
      }
    );
  }

  ngOnInit(): void {
  }

  addDriver(): void {
    this.matDialog.open(TripDriverOrAssistantAddDialogComponent, {
      width: '360px',
    }).afterClosed().subscribe(
      (user) => {
        this.mutateDriver( {bus: this.bus.id, driver: user.id});
      }
    );
  }

  addAssistant(): void {
    this.matDialog.open(TripDriverOrAssistantAddDialogComponent, {
      width: '360px',
    }).afterClosed().subscribe(
      (user) => {
        this.mutateDriver( {bus: this.bus.id, assistant: user.id});
      }
    );
  }

  private mutateDriver(input): void{
    this.busDriverMutation.mutate({input: input}).subscribe(
      (response) => {
        this.bus = response.data.busDriver.bus;
      }
    );
  }

  removeAssistant(user): void{
    this.mutateDriver( {bus: this.bus.id, assistant: user.id, remove: true});
  }

  removeDriver(user: any): void{
    this.mutateDriver( {bus: this.bus.id, driver: user.id, remove: true});
  }
}
