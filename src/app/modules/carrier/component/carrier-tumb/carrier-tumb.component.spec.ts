import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrierTumbComponent } from './carrier-tumb.component';

describe('CarrierTumbComponent', () => {
  let component: CarrierTumbComponent;
  let fixture: ComponentFixture<CarrierTumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrierTumbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrierTumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
