import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TripGQL} from '../../../generated/graphql';
import {echo} from '../../../util/print';
import {BookTicketGQL} from '../../../generated/mutation/graphql';
import {MatDialog} from '@angular/material/dialog';
import {PassengerInfoPreviewComponent} from '../../booking/passenger-info-preview/passenger-info-preview.component';
import {TranslateService} from '@ngx-translate/core';
import {StorageService} from '../../../core/service/storage.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  selectedSeats;
  passengerInfo: any;
  public trip = null;
  bookingOrder: any;
  booking = false;
  isValid: boolean;
  // tslint:disable-next-line:max-line-length
  constructor(
    private activatedRoute: ActivatedRoute,
    private tripGQL: TripGQL,
    private bookTicketGQL: BookTicketGQL,
    public dialog: MatDialog,
    private router: Router,
    translate: TranslateService ,
    private storage: StorageService) {
    translate.use(this.storage.getLanguage('lang'));
    this.activatedRoute.params.subscribe(
      (params) => {
        tripGQL.watch({id: params.trip}).valueChanges.subscribe(
          (response) => this.trip = response.data.trip
        );
      }
    );
    this.activatedRoute.queryParams.subscribe(
      (queryParams) => {
        this.selectedSeats = JSON.parse(decodeURIComponent(queryParams.selectedSeats));
        echo(this.selectedSeats);
      }
    );
  }

  openDialog = () => {
    const dialogRef = this.dialog.open(PassengerInfoPreviewComponent, {
      data: {
        passenger: this.passengerInfo, trip: this.trip, bookingOrder: this.bookingOrder
      }
    });

    return dialogRef;
  }


  ngOnInit(): void {
  }

  bookTicket(): void {

    this.passengerInfo.passengers.map(e => {
      const name = e.name.split(' ');
      e.firstName = name[0];
      e.lastName = name[1];
      return e;
    });
    this.openDialog().afterClosed().subscribe(
      (confirmation) => {
        if (confirmation){
          this.booking = true;
          this.bookTicketGQL.mutate({
            input: {
              trip: this.trip.id,
              passengers: JSON.stringify(this.passengerInfo),
            }
          }).subscribe(
            (data) => {
              this.booking = false;
              this.bookingOrder = data.data.bookTicket.order.id;
              this.router.navigate(['booking/payment/' + this.bookingOrder]);
            }
          );
        }
      }
    );
  }
}
