import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceComponent } from './price.component';



@NgModule({
    declarations: [PriceComponent],
    exports: [
        PriceComponent
    ],
    imports: [
        CommonModule
    ]
})
export class PriceModule { }
