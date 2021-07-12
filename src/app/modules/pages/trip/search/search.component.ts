import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {echo} from '../../../../util/print';
import {Observable} from "rxjs";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {map, shareReplay} from "rxjs/operators";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  tripSearchQuery;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
  }

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
