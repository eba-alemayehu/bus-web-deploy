import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePicComponent } from './profile-pic.component';



@NgModule({
    declarations: [ProfilePicComponent],
    exports: [
        ProfilePicComponent
    ],
    imports: [
        CommonModule
    ]
})
export class ProfilePicModule { }
