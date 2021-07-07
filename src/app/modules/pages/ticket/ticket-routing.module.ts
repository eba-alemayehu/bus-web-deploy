import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TicketPageComponent} from './ticket-page/ticket-page.component';
import {TicketDetailPageComponent} from './ticket-detail-page/ticket-detail-page.component';

const routes: Routes = [{ path: '', component: TicketPageComponent },
  {path: ':id', component: TicketDetailPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketRoutingModule { }
