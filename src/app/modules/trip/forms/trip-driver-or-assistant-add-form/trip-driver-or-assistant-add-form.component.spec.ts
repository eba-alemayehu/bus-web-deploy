import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripDriverOrAssistantAddFormComponent } from './trip-driver-or-assistant-add-form.component';

describe('TripDiverOrAssistantAddFormComponent', () => {
  let component: TripDriverOrAssistantAddFormComponent;
  let fixture: ComponentFixture<TripDriverOrAssistantAddFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripDriverOrAssistantAddFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TripDriverOrAssistantAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
