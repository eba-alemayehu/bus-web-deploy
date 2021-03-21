import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BusComponent } from './bus.component';

const routes: Routes = [{ path: ':id', component: BusComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusRoutingModule { }
