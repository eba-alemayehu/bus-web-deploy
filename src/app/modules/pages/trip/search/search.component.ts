import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {echo} from '../../../../util/print';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  tripSearchQuery;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(
      (queryParams) => {
        echo(queryParams);
        this.tripSearchQuery = queryParams;
      }
    );
  }
  searchChanged(trip: any): void {
    this.router.navigate(
      [],
      {
        relativeTo: this.activatedRoute,
        queryParams: trip,
        // queryParamsHandling: 'merge', // remove to replace all query params by provided
      });
  }
}
