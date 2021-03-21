import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSearchFormComponent } from './user-search-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {FlexModule} from '@angular/flex-layout';
import {UserTumbModule} from '../../component/user-tumb/user-tumb.module';



@NgModule({
    declarations: [UserSearchFormComponent],
    exports: [
        UserSearchFormComponent
    ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    FlexModule,
    UserTumbModule
  ]
})
export class UserSearchFormModule { }
