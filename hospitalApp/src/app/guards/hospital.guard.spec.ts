import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { hospitalGuard } from './doctor.guard';

describe('hospitalGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => hospitalGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
