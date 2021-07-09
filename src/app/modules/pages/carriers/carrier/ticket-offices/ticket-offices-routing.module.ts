import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TicketOfficesComponent } from './ticket-offices.component';

const routes: Routes = [{ path: '', component: TicketOfficesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketOfficesRoutingModule { }
