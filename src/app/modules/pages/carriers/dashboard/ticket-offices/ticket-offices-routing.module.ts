import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TicketOfficesComponent } from './ticket-offices.component';

const routes: Routes = [{ path: '', component: TicketOfficesComponent }, { path: 'form', loadChildren: () => import('./form/form.module').then(m => m.FormModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketOfficesRoutingModule { }
