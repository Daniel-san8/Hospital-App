import { inject } from '@angular/core';
import { CanActivateFn, createUrlTreeFromSnapshot } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ERole } from '../models/role.enum';

export const usuarioGuard: CanActivateFn = (route) => {
  const cookies = inject(CookieService);
  const token = cookies.get('token');
  const role = cookies.get('ROLE');

  if (!token || role !== ERole.USER) {
    return createUrlTreeFromSnapshot(route, ['/login']);
  }
  return true;
};
