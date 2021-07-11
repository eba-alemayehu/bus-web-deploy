import {Component, ContentChild, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TripDriverOrAssistantAddDialogComponent} from '../../../../trip/dialog/trip-driver-or-assistant-add-dialog/trip-driver-or-assistant-add-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {echo} from '../../../../../util/print';
import {CarrierTicketerGQL, CarrierTicketerMutation} from '../../../../../generated/mutation/graphql';

@Component({
  selector: 'app-tickters',
  templateUrl: './tickters.component.html',
  styleUrls: ['./tickters.component.scss']
})
export class TicktersComponent implements OnInit {
  @ViewChild('usersTable') usersTable;

  ticketerCarrierId;
  ticketOfficeId;
  constructor(
    private activatedRoute: ActivatedRoute,
    private carrierTicketerGQL: CarrierTicketerGQL,
    private matDialog: MatDialog) {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.ticketerCarrierId = params.id;
        this.ticketOfficeId = params.ticketOffice;
      }
    );
  }

  ngOnInit(): void {
  }
  addTicketer(): void{
    this.matDialog.open(TripDriverOrAssistantAddDialogComponent, {
    width: '360px',
  }).afterClosed().subscribe(
    (user) => {
    this.ticketerActtion(user, false); }
    );
  }

  private ticketerActtion(user, remove: boolean): void {
        this.carrierTicketerGQL.mutate({
          input: {
            ticketOffice: this.ticketOfficeId,
            user: user.id,
            remove: remove
          }
        }).subscribe((response) => {
          const $user = response.data.carrierTicketer.carrierTicketer.user;
          if (remove){
            this.usersTable.removeUser($user);
          }else{
            this.usersTable.addNewUser($user);
          }
        });
  }

  removeTicketer(user): void {
    this.ticketerActtion(user, true);
  }
}
