import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusTumbComponent } from './bus-tumb.component';

describe('BusTumbComponent', () => {
  let component: BusTumbComponent;
  let fixture: ComponentFixture<BusTumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusTumbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusTumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
