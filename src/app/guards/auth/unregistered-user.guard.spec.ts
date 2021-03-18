import { TestBed } from '@angular/core/testing';

import { UnregisteredUserGuard } from './unregistered-user.guard';

describe('UnregisteredUserGuard', () => {
  let guard: UnregisteredUserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UnregisteredUserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
