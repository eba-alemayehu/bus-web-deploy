import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatePaymentDialogComponent } from './validate-payment-dialog.component';

describe('ValidatePaymentDialogComponent', () => {
  let component: ValidatePaymentDialogComponent;
  let fixture: ComponentFixture<ValidatePaymentDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidatePaymentDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidatePaymentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
