import {Component, OnInit} from '@angular/core';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {Color, Label} from 'ng2-charts';
import {CountGQL} from "../../../../generated/graphql";
import {map} from "rxjs/operators";
import {echo} from "../../../../util/print";

@Component({
  selector: 'app-main-dashboard-chart',
  templateUrl: './main-dashboard-chart.component.html',
  styleUrls: ['./main-dashboard-chart.component.scss']
})
export class MainDashboardChartComponent implements OnInit {
  public lineChartData: ChartDataSets[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: ChartOptions = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];

  constructor(private countGQL: CountGQL) {
    this.countGQL.watch({}).valueChanges.pipe(
      map(response => response.data.countStat),
    ).subscribe(
      (response) => {
        echo(response);
      }
    );
  }

  ngOnInit(): void {
  }

}
