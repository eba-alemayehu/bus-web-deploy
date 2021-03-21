import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectBusDialogComponent } from './select-bus-dialog.component';

describe('SelectBusDialogComponent', () => {
  let component: SelectBusDialogComponent;
  let fixture: ComponentFixture<SelectBusDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectBusDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectBusDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
