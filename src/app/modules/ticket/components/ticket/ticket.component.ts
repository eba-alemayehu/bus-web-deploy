import { Component, OnInit, Input } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {TicketDetailComponent} from '../ticket-detail/ticket-detail.component';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {
  @Input() ticket;
  constructor( public dialog: MatDialog) { }

  openDialog = () => {
    const dialogRef = this.dialog.open(TicketDetailComponent, {
      data: {
        ticket: this.ticket
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  ngOnInit(): void {
  }

}
