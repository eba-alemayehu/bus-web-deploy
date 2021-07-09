import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketOfficesComponent } from './ticket-offices.component';

describe('TicketOfficesComponent', () => {
  let component: TicketOfficesComponent;
  let fixture: ComponentFixture<TicketOfficesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketOfficesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketOfficesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
