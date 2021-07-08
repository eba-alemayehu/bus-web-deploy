import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceComponent } from './price.component';
import {LangModule} from '../../../lang.module';



@NgModule({
    declarations: [PriceComponent],
    exports: [
        PriceComponent
    ],
    imports: [
        CommonModule,
        LangModule
    ]
})
export class PriceModule { }
