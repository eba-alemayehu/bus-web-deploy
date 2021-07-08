import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TicktersComponent } from './tickters.component';

const routes: Routes = [{ path: '', component: TicktersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicktersRoutingModule { }
