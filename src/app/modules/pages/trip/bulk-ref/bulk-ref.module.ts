import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BulkRefRoutingModule } from './bulk-ref-routing.module';
import { BulkRefComponent } from './bulk-ref.component';
import {TripListModule} from '../../../trip/lists/trip-list/trip-list.module';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [BulkRefComponent],
  imports: [
    CommonModule,
    BulkRefRoutingModule,
    TripListModule,
    MatCardModule
  ]
})
export class BulkRefModule { }
