import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';



@NgModule({
    declarations: [SideNavComponent],
    exports: [
        SideNavComponent
    ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatListModule
  ]
})
export class SideNavModule { }
