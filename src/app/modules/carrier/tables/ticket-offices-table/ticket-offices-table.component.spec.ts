import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { TicketOfficesTableComponent } from './ticket-offices-table.component';

describe('TicketOfficesTableComponent', () => {
  let component: TicketOfficesTableComponent;
  let fixture: ComponentFixture<TicketOfficesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketOfficesTableComponent ],
      imports: [
        NoopAnimationsModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketOfficesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
