import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserTumbComponent } from './user-tumb.component';
import {MatListModule} from '@angular/material/list';



@NgModule({
  declarations: [UserTumbComponent],
  exports: [
    UserTumbComponent
  ],
  imports: [
    CommonModule,
    MatListModule
  ]
})
export class UserTumbModule { }
