import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicktersComponent } from './tickters.component';

describe('TicktersComponent', () => {
  let component: TicktersComponent;
  let fixture: ComponentFixture<TicktersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicktersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicktersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
