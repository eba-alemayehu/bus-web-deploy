import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserTumbComponent } from './user-tumb.component';
import {MatListModule} from '@angular/material/list';
import {RouterModule} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";
import {LangModule} from "../../../../lang.module";



@NgModule({
  declarations: [UserTumbComponent],
  exports: [
    UserTumbComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    RouterModule,
    MatIconModule,
    LangModule
  ]
})
export class UserTumbModule { }
