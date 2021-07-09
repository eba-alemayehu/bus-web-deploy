import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinksListComponent } from './links-list.component';
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [LinksListComponent],
  exports: [
    LinksListComponent
  ],
    imports: [
        CommonModule,
        MatListModule,
        MatIconModule,
        RouterModule
    ]
})
export class LinksListModule { }
