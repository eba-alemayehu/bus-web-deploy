import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusSeatConfigurationComponent } from './bus-seat-configuration.component';

describe('BusSeatConfigurationComponent', () => {
  let component: BusSeatConfigurationComponent;
  let fixture: ComponentFixture<BusSeatConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusSeatConfigurationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusSeatConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
