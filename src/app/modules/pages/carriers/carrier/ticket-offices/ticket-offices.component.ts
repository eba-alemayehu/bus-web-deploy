import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-ticket-offices',
  templateUrl: './ticket-offices.component.html',
  styleUrls: ['./ticket-offices.component.scss']
})
export class TicketOfficesComponent implements OnInit {

  constructor(public activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
