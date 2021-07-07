import {ApplicationRef, Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import {BusSeatConfigurationGQL, BusSeatConfigurationNode, TripGQL, TripSeatType} from '../../../../generated/graphql';
import {map, shareReplay, tap} from 'rxjs/operators';
import {echo} from '../../../../util/print';
import {ReserveTicketGQL, ReserveTicketMutation} from '../../../../generated/mutation/graphql';
import {FetchResult} from 'apollo-link';
import {Observable} from "rxjs";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";

enum Orientation {
  ROW = 'row',
  COLUMN = 'column',
}

@Component({
  selector: 'app-bus-seat-configuration',
  templateUrl: './bus-seat-configuration.component.html',
  styleUrls: ['./bus-seat-configuration.component.scss']
})
export class BusSeatConfigurationComponent implements OnInit {
  @Input() orientation = Orientation.ROW;

  @Input('busSeatConfiguration') set busSeatConfiguration(value) {
    if (!value?.id) {
      return;
    }
    this.busSeatConfigurationGQL
      .watch({id: value.id}).valueChanges
      .pipe(map((response) => response.data.busSeatConfiguration.busseatconfigurationseatSet.edges))
      .subscribe(
        (busSeatConfigurationSeats) => {
          this.seats = busSeatConfigurationSeats.map(
            (e) => {
              const busSeatConfigurationSeat: any = {};
              busSeatConfigurationSeat.busSeatConfigurationSeat = e.node;
              return busSeatConfigurationSeat;
            }
          );
          this.setRowCol();
        }
      );
  }

  @Input('trip') set trip(value) {
    if (!value.id) {
      return;
    }
    this.tripGQL.watch({id: value.id}, {
      pollInterval: 4000
    }).valueChanges
      .pipe(
        tap((response) => this._trip = response.data.trip),
        map((response) => response.data.trip.seats),
        tap(seats => {
          seats.forEach(
            (seat) => {
              if (seat.isLockedByMe && !seat.isBookedByMe) {
                this.selectedBusSeatConfigurationSeats.push(seat);
                this.selectedBusSeatConfigurationSeatsChange.emit(this.selectedBusSeatConfigurationSeats);
              }
            });
        })
      )
      .subscribe(
        (seats) => {
          this.seats = seats;
          this.setRowCol();
        }
      );
  }

  @Input() selectedBusSeatConfigurationSeats: any[] = [];
  @Output() selectedBusSeatConfigurationSeatsChange: EventEmitter<any> = new EventEmitter<any>();
  seats = [];
  row = [];
  col = [];
  _trip;
  loading = [];

  constructor(
    private busSeatConfigurationGQL: BusSeatConfigurationGQL,
    private reserveTicketGQL: ReserveTicketGQL,
    private appRef: ApplicationRef,
    private breakpointObserver: BreakpointObserver,
    private tripGQL: TripGQL) {
  }

  ngOnInit(): void {
    this.breakpointObserver.observe(Breakpoints.Handset)
      .pipe(
        map(result => result.matches),
        shareReplay()
      ).subscribe((isHandSet) => {
      if (isHandSet) {
        this.orientation = Orientation.COLUMN;
      }
    });
  }

  setRowCol(): void {
    this.row = [];
    this.col = [];
    let maxCol = -1;
    let maxRow = -1;
    this.seats.forEach(
      (e) => {
        maxCol = (e.busSeatConfigurationSeat.col > maxCol) ? e.busSeatConfigurationSeat.col : maxCol;
        maxRow = (e.busSeatConfigurationSeat.row > maxRow) ? e.busSeatConfigurationSeat.row : maxRow;
      }
    );
    for (let col = 0; col <= maxCol; col++) {
      this.col.push(col);
    }
    for (let row = 0; row <= maxRow; row++) {
      this.row.push(row);
    }
  }

  seat(row, col): any {
    let seat: TripSeatType = null;
    if (this.orientation === Orientation.COLUMN) {
      const temp = row;
      row = col;
      col = temp;
    }
    const seats = this.seats.every(
      (e) => {
        if (e.busSeatConfigurationSeat.col === col && e.busSeatConfigurationSeat.row === row) {
          seat = e;
          return false;
        }
        return true;
      }
    );
    if (seat == null) {
      return null;
    }
    const seatStyle = this.setSeatStyle(seat);
    return {seat: seat, style: seatStyle};
  }

  private setSeatStyle(seat: TripSeatType): any {
    const seatStyle: any = {
      'width.px': 36,
      fill: 'url(#available)',
    };

    if (this.orientation === Orientation.ROW) {
      seatStyle.transform = 'rotate(-90deg)';
    }
    if (seat.isLockedByMe && !seat.isBookedByMe) {
      seatStyle.fill = 'url(#selected)';
    } else if (seat.isLocked || seat.isBookedByMe) {
      seatStyle.fill = 'url(#reserved)';
    } else if (seat.isSold === true) {
      seatStyle.fill = 'url(#booked)';
    } else {
      seatStyle.fill = 'url(#available)';
    }
    return seatStyle;
  }

  selectSeat(seat): void {
    this.loading.push(seat.busSeatConfigurationSeat.id);
    this.reserveTicketGQL.mutate({
      input: {
        busSeatConfigurationSeat: seat.busSeatConfigurationSeat.id,
        id: seat.ticket?.id,
        trip: this._trip.id,
        lock: true,
      }
    })
      .subscribe((response) => {
        this.loading = this.loading.filter(e => e !== seat.busSeatConfigurationSeat.id);
        if (response.errors == null) {
          this.selectedBusSeatConfigurationSeats.push(response.data.reserveTicket.ticket.busSeatConfigurationSeat);
          this.selectedBusSeatConfigurationSeatsChange.emit(this.selectedBusSeatConfigurationSeats);
          this.updateSeatStatus(response);
        }
      });
  }

  private updateSeatStatus(response: FetchResult<ReserveTicketMutation>): void {
    const $seat = response.data.reserveTicket.ticket.busSeatConfigurationSeat;
    for (let i = 0; i < this.seats.length; i++) {
      if (this.seats[i].busSeatConfigurationSeat.id === $seat.id) {
        const s: any = Object.assign({}, this.seats[i]);
        s.isLockedByMe = true;
        this.seats = this.seats.filter(
          e => e !== this.seats[i]
        );
        this.seats = [...this.seats, s];
        this.appRef.tick();
      }
    }
  }

  isSeatSelected(seat): boolean {
    return this.selectedBusSeatConfigurationSeats?.indexOf(seat) >= 0;
  }

  seatStatus(seat): string {
    if (seat.isLocked) {
      return 'locked';
    } else if (seat.isSold) {
      return 'sold';
    } else if (this.isSeatSelected(seat)) {
      return 'selected';
    } else {
      return 'unselected';
    }
  }
}
