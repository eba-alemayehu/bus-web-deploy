import {Component, OnInit} from '@angular/core';
import {AnimationOptions} from 'ngx-lottie';
import {AnimationItem} from 'lottie-web';
import {ActivatedRoute, Router} from '@angular/router';
import {MyTicketsGQL, TicketsGQL} from '../../../../generated/graphql';
import {map} from 'rxjs/operators';
import {Observable, observable, of} from 'rxjs';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {
  options: AnimationOptions = {
    path: '/assets/lotties/success.json',
  };

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  tickets$ = of([]);
  loading = true;

  constructor(private router: Router, private ticketsGQL: TicketsGQL, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.tickets$ = this.ticketsGQL.watch({
      bulkRef: this.activatedRoute.snapshot.queryParamMap.get('bulkRef'),
      order: this.activatedRoute.snapshot.queryParamMap.get('orderId'),
    }).valueChanges.pipe(map((response) => {
      this.loading = response.loading;
      return response.data.tickets.edges;
    }));
  }

  redirectToTickets(): void {
    this.router.navigate([]);
  }

}
