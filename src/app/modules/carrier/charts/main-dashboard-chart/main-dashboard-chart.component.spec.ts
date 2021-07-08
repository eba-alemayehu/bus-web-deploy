import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDashboardChartComponent } from './main-dashboard-chart.component';

describe('MainDashboardChartComponent', () => {
  let component: MainDashboardChartComponent;
  let fixture: ComponentFixture<MainDashboardChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainDashboardChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDashboardChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
