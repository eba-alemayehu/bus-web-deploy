import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrierRouteFormComponent } from './carrier-route-form.component';

describe('CarrierRouteFormComponent', () => {
  let component: CarrierRouteFormComponent;
  let fixture: ComponentFixture<CarrierRouteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrierRouteFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrierRouteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
