import {Component, Input, OnInit} from '@angular/core';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {Color, Label} from 'ng2-charts';
import {CountGQL} from '../../../../generated/graphql';
import {map} from 'rxjs/operators';
import {echo} from '../../../../util/print';

@Component({
  selector: 'app-main-dashboard-chart',
  templateUrl: './main-dashboard-chart.component.html',
  styleUrls: ['./main-dashboard-chart.component.scss']
})
export class MainDashboardChartComponent implements OnInit {
  @Input() carrier;

  public lineChartData: ChartDataSets[] = [];
  public lineChartLabels: Label[] = [];
  public lineChartOptions: ChartOptions = {
    responsive: true,
  };
  public lineChartColors: Color[] = [];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];

  constructor(private countGQL: CountGQL) {
  }

  ngOnInit(): void {
    this.countGQL.watch({
      carrier: this.carrier
    }).valueChanges.pipe(
      map(response => response.data.countStat),
    ).subscribe(
      (response) => {
        this.lineChartLabels = response.tickets.map(
          e => new Intl.DateTimeFormat('en', {month: 'short', day: 'numeric'}).format(new Date(e.date)));
        this.lineChartData.unshift({
          data: response.tickets.map(e => e.count),
          borderColor: 'green',
          backgroundColor: 'rgba(0,255,0,0.3)',
          label: 'Tickets'
        });
      }
    );
  }

}
