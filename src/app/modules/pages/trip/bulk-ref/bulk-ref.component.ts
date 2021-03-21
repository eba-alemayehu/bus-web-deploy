import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TripsGQL} from '../../../../generated/graphql';

@Component({
  selector: 'app-bulk-ref',
  templateUrl: './bulk-ref.component.html',
  styleUrls: ['./bulk-ref.component.scss']
})
export class BulkRefComponent implements OnInit {
  bulkRef = null;
  constructor(private activatedRoute: ActivatedRoute, private tripsGQL: TripsGQL, private router: Router) {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.bulkRef = params.uuid;
      }
    );
  }

  ngOnInit(): void {
  }

  selectTrip(trip: any): void{
    this.router.navigate(['/trip/' + trip.node.id]);
  }
}
