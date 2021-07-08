import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainDashboardChartComponent } from './main-dashboard-chart.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [MainDashboardChartComponent],
  exports: [
    MainDashboardChartComponent
  ],
  imports: [
    CommonModule,
    ChartsModule
  ]
})
export class MainDashboardChartModule { }
