import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeTripDateFormComponent } from './change-trip-date-form.component';

describe('ChangeTripDateFormComponent', () => {
  let component: ChangeTripDateFormComponent;
  let fixture: ComponentFixture<ChangeTripDateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeTripDateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeTripDateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
