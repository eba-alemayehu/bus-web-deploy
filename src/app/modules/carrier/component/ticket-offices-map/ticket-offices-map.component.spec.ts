import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketOfficesMapComponent } from './ticket-offices-map.component';

describe('TicketOfficesMapComponent', () => {
  let component: TicketOfficesMapComponent;
  let fixture: ComponentFixture<TicketOfficesMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketOfficesMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketOfficesMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
