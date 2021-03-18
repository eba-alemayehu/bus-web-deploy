import { TestBed } from '@angular/core/testing';

import { HasResumeProfileGuard } from './has-resume-profile.guard';

describe('HasResumeProfileGuard', () => {
  let guard: HasResumeProfileGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(HasResumeProfileGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
