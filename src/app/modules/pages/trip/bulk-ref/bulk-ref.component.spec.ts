import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkRefComponent } from './bulk-ref.component';

describe('BulkRefComponent', () => {
  let component: BulkRefComponent;
  let fixture: ComponentFixture<BulkRefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulkRefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
