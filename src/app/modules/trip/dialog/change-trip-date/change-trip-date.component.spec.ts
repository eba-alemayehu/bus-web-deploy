import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeTripDateComponent } from './change-trip-date.component';

describe('ChangeTripDateComponent', () => {
  let component: ChangeTripDateComponent;
  let fixture: ComponentFixture<ChangeTripDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeTripDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeTripDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
