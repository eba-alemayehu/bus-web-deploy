import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketOfficeFormComponent } from './ticket-office-form.component';

describe('TicketOfficeComponent', () => {
  let component: TicketOfficeFormComponent;
  let fixture: ComponentFixture<TicketOfficeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketOfficeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketOfficeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
