import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import {FlexModule} from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {TripFormModule} from '../../../trip/forms/trip-form/trip-form.module';
import {TripListItemModule} from '../../../trip/components/trip-list-item/trip-list-item.module';


@NgModule({
  declarations: [SearchComponent],
    imports: [
        CommonModule,
        SearchRoutingModule,
        FlexModule,
        MatCardModule,
        TripFormModule,
        TripListItemModule
    ]
})
export class SearchModule { }
