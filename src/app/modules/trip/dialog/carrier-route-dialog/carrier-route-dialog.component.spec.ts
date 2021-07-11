import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrierRouteDialogComponent } from './carrier-route-dialog.component';

describe('CarrierRouteDialogComponent', () => {
  let component: CarrierRouteDialogComponent;
  let fixture: ComponentFixture<CarrierRouteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrierRouteDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrierRouteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
