import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketOfficeComponent } from './ticket-office.component';

describe('TicketOfficeComponent', () => {
  let component: TicketOfficeComponent;
  let fixture: ComponentFixture<TicketOfficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketOfficeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
