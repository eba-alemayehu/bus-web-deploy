import {Component, Input, OnInit} from '@angular/core';
import {BusSeatConfigurationGQL, BusSeatConfigurationNode} from '../../../../generated/graphql';
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
          this.busSeatConfigurationSeats = busSeatConfigurationSeats;
          this.setRowCol();
        }
      );
  };
  busSeatConfigurationSeats = [];
  row = [];
  col = [];

  constructor(private busSeatConfigurationGQL: BusSeatConfigurationGQL) {
  }

  ngOnInit(): void {
  }
  setRowCol(): void {
    let maxCol = -1;
    let maxRow = -1;
    this.busSeatConfigurationSeats.forEach(
      (e) => {
        maxCol = (e.node.col > maxCol) ? e.node.col : maxCol;
        maxRow = (e.node.row > maxRow) ? e.node.row : maxRow;
      }
    );
    for (let col = 0; col <= maxCol; col++){
      this.col.push(col);
    }
    for (let row = 0; row <= maxRow; row++){
      this.row.push(row);
    }
  }
  seat(row, col): BusSeatConfigurationNode|null{
    let seat: BusSeatConfigurationNode = null;
    const seats = this.busSeatConfigurationSeats.every(
      (e) => {
        if (e.node.col === col && e.node.row === row){
          seat = e.node;
          return false;
        }
        return true;
      }
    );
    return seat;
  }
}
