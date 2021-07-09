import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicktersRoutingModule } from './tickters-routing.module';
import { TicktersComponent } from './tickters.component';
import {UsersTableModule} from "../../../../account/tables/users-table/users-table.module";
import {FlexModule} from "@angular/flex-layout";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [TicktersComponent],
    imports: [
        CommonModule,
        TicktersRoutingModule,
        UsersTableModule,
        FlexModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule
    ]
})
export class TicktersModule { }
