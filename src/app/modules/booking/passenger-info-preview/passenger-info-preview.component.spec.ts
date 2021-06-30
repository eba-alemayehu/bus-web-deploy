import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerInfoPreviewComponent } from './passenger-info-preview.component';

describe('PassengerInfoPreviewComponent', () => {
  let component: PassengerInfoPreviewComponent;
  let fixture: ComponentFixture<PassengerInfoPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassengerInfoPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengerInfoPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
