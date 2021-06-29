import {ApplicationRef, Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import {BusSeatConfigurationGQL, BusSeatConfigurationNode, TripGQL, TripSeatType} from '../../../../generated/graphql';
import {map} from 'rxjs/operators';
import {echo} from '../../../../util/print';

enum Orientation{
  ROW= 'row',
  COLUMN = 'column',
}
@Component({
  selector: 'app-bus-seat-configuration',
  templateUrl: './bus-seat-configuration.component.html',
  styleUrls: ['./bus-seat-configuration.component.scss']
})
export class BusSeatConfigurationComponent implements OnInit {
  @Input() orientation = Orientation.ROW;
  @Input('busSeatConfiguration') set busSeatConfiguration(value){
    this.busSeatConfigurationGQL
      .watch({id: value.id}).valueChanges
      .pipe(map((response) => response.data.busSeatConfiguration.busseatconfigurationseatSet.edges))
      .subscribe(
        (busSeatConfigurationSeats) => {
          echo(busSeatConfigurationSeats);
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
  @Input('trip') set trip(value){
    echo('****');
    echo(value);
    if (!value.id) return;
    this.tripGQL.watch({id: value.id}).valueChanges
      .pipe(map((response) => response.data.trip.seats))
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

  constructor(private busSeatConfigurationGQL: BusSeatConfigurationGQL, private appRef: ApplicationRef, private tripGQL: TripGQL) {
  }

  ngOnInit(): void {
  }
  setRowCol(): void {
    let maxCol = -1;
    let maxRow = -1;
    this.seats.forEach(
      (e) => {
        maxCol = (e.busSeatConfigurationSeat.col > maxCol) ? e.busSeatConfigurationSeat.col : maxCol;
        maxRow = (e.busSeatConfigurationSeat.row > maxRow) ? e.busSeatConfigurationSeat.row : maxRow;
      }
    );
    for (let col = 0; col <= maxCol; col++){
      this.col.push(col);
    }
    for (let row = 0; row <= maxRow; row++){
      this.row.push(row);
    }
  }
  seat(row, col): TripSeatType|null {
    let seat: TripSeatType = null;
    const seats = this.seats.every(
      (e) => {
        if (e.busSeatConfigurationSeat.col === col && e.busSeatConfigurationSeat.row === row){
          seat = e;
          return false;
        }
        return true;
      }
    );
    return seat;
  }
  selectSeat(seat): void{
    if (!this.isSeatSelected(seat)){
      this.selectedBusSeatConfigurationSeats.push(seat);
    }else{
      const index = this.selectedBusSeatConfigurationSeats.indexOf(seat);
      this.selectedBusSeatConfigurationSeats.splice(index, 1);
    }
    this.selectedBusSeatConfigurationSeatsChange.emit(this.selectedBusSeatConfigurationSeats);
    this.appRef.tick();
  }
  isSeatSelected(seat): boolean{
    return this.selectedBusSeatConfigurationSeats?.indexOf(seat) >= 0;
  }
  seatStatus(seat): string{
    if (seat.isLocked){
      return 'locked';
    } else if (seat.isSold){
      return 'sold';
    } else if (this.isSeatSelected(seat)){
      return 'selected';
    } else{
      return 'unselected';
    }
  }
}
