import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripDatetimeComponent } from './trip-datetime.component';

describe('TripDatetimeComponent', () => {
  let component: TripDatetimeComponent;
  let fixture: ComponentFixture<TripDatetimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripDatetimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TripDatetimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
