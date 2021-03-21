import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTumbComponent } from './user-tumb.component';

describe('UserTumbComponent', () => {
  let component: UserTumbComponent;
  let fixture: ComponentFixture<UserTumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTumbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
