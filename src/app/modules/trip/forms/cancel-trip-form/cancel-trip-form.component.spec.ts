import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelTripFormComponent } from './cancel-trip-form.component';

describe('CancelTripFormComponent', () => {
  let component: CancelTripFormComponent;
  let fixture: ComponentFixture<CancelTripFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelTripFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelTripFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
