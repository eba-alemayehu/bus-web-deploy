import {Component, OnInit} from '@angular/core';
import {TicketOfficesGQL} from '../../../../generated/graphql';
import {map} from 'rxjs/operators';
import {echo} from '../../../../util/print';

@Component({
  selector: 'app-ticket-offices-map',
  templateUrl: './ticket-offices-map.component.html',
  styleUrls: ['./ticket-offices-map.component.scss']
})
export class TicketOfficesMapComponent implements OnInit {
  zoom = 8;

  lat = 9.005401;
  lng = 38.763611;

  offices$;
  selectedOffice;

  constructor(private ticketOfficesGQL: TicketOfficesGQL) {
    this.offices$ = this.ticketOfficesGQL.watch({}).valueChanges
      .pipe(map(response => response.data.ticketOffices.edges.map(e => e.node)));
  }

  ngOnInit(): void {
  }

  clickedMarker(office): void {
    this.selectedOffice = office;
  }
}
