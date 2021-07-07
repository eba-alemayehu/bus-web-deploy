import {Component, Input, OnInit} from '@angular/core';
import {RoutesGQL} from "../../../../generated/graphql";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-route-list',
  templateUrl: './route-list.component.html',
  styleUrls: ['./route-list.component.scss']
})
export class RouteListComponent implements OnInit {
  @Input() routes: any[] | null = null;
  @Input() order: string;
  routes$;

  constructor(private routesGQL: RoutesGQL) {
  }

  ngOnInit(): void {
    this.routes$ = this.routesGQL.watch({
      order: this.order
    }).valueChanges.pipe(map(({data}) => data.routes.edges.map(e => e.node)));
  }

}
