import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {RouterModule} from '@angular/router';
import {LangModule} from '../../lang.module';



@NgModule({
    declarations: [SideNavComponent],
    exports: [
        SideNavComponent
    ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    RouterModule,
    LangModule
  ]
})
export class SideNavModule { }
