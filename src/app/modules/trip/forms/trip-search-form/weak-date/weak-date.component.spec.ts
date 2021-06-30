import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeakDateComponent } from './weak-date.component';

describe('WeakDateComponent', () => {
  let component: WeakDateComponent;
  let fixture: ComponentFixture<WeakDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeakDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeakDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
