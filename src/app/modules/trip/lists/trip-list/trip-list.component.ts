import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {TripsGQL} from '../../../../generated/graphql';
import {map, tap} from 'rxjs/operators';
import {echo} from '../../../../util/print';
import {TranslateService} from '@ngx-translate/core';
import {StorageService} from '../../../../core/service/storage.service';
import {throwError} from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import {Router} from '@angular/router';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.scss']
})
export class TripListComponent implements OnInit {
  @Input() carrier = null;
  @Input() uuid = null;
  @Input() leavingFrom = null;
  @Input() destination = null;
  @Input() departureDate = null;
  @Input() loading = true;
  requesting = false;
  @Output() selected: EventEmitter<any> = new EventEmitter<any>();
  trips = [];
  $pageInfo = null;

  private $pageSize: number | null = 7;
  constructor(private tripsGQL: TripsGQL, translate: TranslateService , private storage: StorageService, private matDialog: MatDialog, private router: Router) {
    translate.use(this.storage.getLanguage('lang'));
  }

  ngOnInit(): void {
    this.loadTrips();
  }

  private loadTrips(): void {
    const departureDate = new Date(this.departureDate);
    const departureDateTo = new Date(departureDate.setDate(departureDate.getDate() + 1));
    console.log('loadtrips');
    this.loading = true;
    // this.trips$ = this.tripsGQL.watch(
    //   {
    //     carrier: (typeof (this.carrier) === 'string') ? this.carrier : this.carrier?.id,
    //     bulkRef: this.uuid,
    //     leavingFrom: this.leavingFrom,
    //     destination: this.destination,
    //     departureTime_Gte: (this.departureDate === null) ? null : new Date(this.departureDate).toISOString(),
    //     departureTime_Lte: (this.departureDate === null) ? null : departureDateTo.toISOString(),
    //   }).valueChanges
    //   .pipe(
    //     tap(response => {
    //       this.loading = response.loading;
    //     }),
    //     map(response => response.data.trips.edges),
    //   );

    this.tripsGQL.watch(
      {
        carrier: (typeof (this.carrier) === 'string') ? this.carrier : this.carrier?.id,
        bulkRef: this.uuid,
        leavingFrom: this.leavingFrom,
        destination: this.destination,
        departureTime_Gte: (!this.departureDate) ? null : new Date(this.departureDate).toISOString(),
        departureTime_Lte: (!this.departureDate) ? null : departureDateTo.toISOString(),
        first: this.$pageSize,
        after: (this.$pageInfo) ? this.$pageInfo.endCursor : null,
      }).valueChanges
      .pipe(
        tap(response => {
          // this.loading = response.loading;
        }),
        map(response => {
          this.$pageInfo = response.data.trips.pageInfo;
          return response.data.trips.edges; }),
      ).subscribe(
          (trips) => {
            console.log(trips);
            this.loading = false;
            this.trips = this.trips.concat(trips);
            this.requesting = false;
          }, (err) => {
            this.loading = false;
            this.requesting = false;
          }
        );

  }

  onSelect(trip: any): any {
    this.selected.emit(trip);
  }


  onScroll(): void{
    if(this.$pageInfo.hasNextPage && this.$pageInfo && !this.requesting){
      this.requesting = true;
      this.loading = true;
      this.loadTrips();
      console.log('scrolling');
    }
    return;
  }

  edit(trip: any): void {
    // this.matDialog.open(EditTripComponent, {width: '144px'});
    this.router.navigate([this.router.url, 'form', 'edit', trip.node.id]);

  }

  cancel(trip: any): void {
    // this.matDialog.open(DeleteTripComponent, {width: '144px'});
    this.router.navigate([this.router.url, 'form', 'cancel', trip.node.id], {
      queryParams: {backUrl: this.router.url.toString()}
    });
  }

  changeDate(trip: any): void {
    // this.matDialog.open(ChangeTripDateComponent, {width: '144px'});
    this.router.navigate([this.router.url, 'form', 'changedate', trip.node.id]);
  }
}
