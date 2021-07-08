import {Component, OnInit, ViewChild} from '@angular/core';
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
  constructor(
    private activatedRoute: ActivatedRoute,
    private carrierTicketerGQL: CarrierTicketerGQL,
    private matDialog: MatDialog) {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.ticketerCarrierId = params.id;
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
        this.carrierTicketerGQL.mutate({
          input: {
            carrier: this.ticketerCarrierId,
            user: user.id,
          }
        }).subscribe((response) => {
          this.usersTable.addNewUser(response.data.carrierTicketer.carrierTicketer.user);
        });
      }
    );
  }
}
