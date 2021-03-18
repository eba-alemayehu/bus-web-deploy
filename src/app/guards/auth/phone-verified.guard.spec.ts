import { TestBed } from '@angular/core/testing';

import { PhoneVerifiedGuard } from './phone-verified.guard';

describe('PhoneVerifiedGuard', () => {
  let guard: PhoneVerifiedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PhoneVerifiedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
