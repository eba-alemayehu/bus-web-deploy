import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CarrierRouteDialogComponent} from '../../../../trip/dialog/carrier-route-dialog/carrier-route-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {TranslateService} from '@ngx-translate/core';
import {StorageService} from '../../../../../core/service/storage.service';

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.scss']
})
export class RoutesComponent implements OnInit {
  @ViewChild('routesTable') routesTable;

  constructor(public activatedRoute: ActivatedRoute, public matDialog: MatDialog,
              translate: TranslateService , private storageService: StorageService
  ) {
    translate.use(this.storageService.getLanguage('lang'));
  }

  ngOnInit(): void {
  }

  openFormDialog(leavingFrom = null, destination = null): void{
    this.matDialog.open(CarrierRouteDialogComponent, {
      width: '420px',
      data: {
        carrier: this.activatedRoute.snapshot.params.id,
        leavingFrom: leavingFrom,
        destination: destination,
      }
    }).afterClosed().subscribe(
      (response) => {
        const routePrice = response.data.routePrice.routePrice;
        const routePriceReverse = response.data.routePrice.routePriceReverse;
        this.routesTable.addRoute(routePrice.route, routePrice.price);
        this.routesTable.addRoute(routePriceReverse.route, routePriceReverse.price);
      }
    );
  }
}
