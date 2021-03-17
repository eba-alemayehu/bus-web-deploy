import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {echo} from '../../../../util/print';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  tripSearchData;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(
      (queryParams) => {
        this.tripSearchData = queryParams;
      }
    );
  }

}
