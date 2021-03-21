import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripDriverOrAssistantAddDialogComponent } from './trip-driver-or-assistant-add-dialog.component';

describe('TripDiverOrAssistantAddDialogComponent', () => {
  let component: TripDriverOrAssistantAddDialogComponent;
  let fixture: ComponentFixture<TripDriverOrAssistantAddDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripDriverOrAssistantAddDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TripDriverOrAssistantAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
