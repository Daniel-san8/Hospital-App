import { CanActivateFn } from '@angular/router';

export const hospitalGuard: CanActivateFn = (route, state) => {
  return true;
};
