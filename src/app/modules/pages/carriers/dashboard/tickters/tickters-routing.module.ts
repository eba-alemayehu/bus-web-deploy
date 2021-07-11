import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {TicktersComponent} from './tickters.component';

const routes: Routes = [
  {path: '', component: TicktersComponent},
  {path: ':ticketOffice/tickets', loadChildren: () => import('./tickets/tickets.module').then(m => m.TicketsModule)},
  {path: ':ticketOffice', component: TicktersComponent},
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicktersRoutingModule {
}
