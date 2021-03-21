import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BulkRefComponent } from './bulk-ref.component';

const routes: Routes = [{ path: ':uuid', component: BulkRefComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BulkRefRoutingModule { }
