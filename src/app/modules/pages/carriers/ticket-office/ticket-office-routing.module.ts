import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CarriersComponent} from '../carriers.component';


const routes: Routes = [
  { path: '', loadChildren: () => import('./ticket-office.module').then(m => m.TicketOfficeModule) }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketOfficeRoutingModule { }
