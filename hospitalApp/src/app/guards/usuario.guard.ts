import { inject } from '@angular/core';
import { CanActivateFn, createUrlTreeFromSnapshot } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

export const usuarioGuard: CanActivateFn = (route) => {
  const cookies = inject(CookieService);
  const token = cookies.get('token');

  if (!token) {
    return createUrlTreeFromSnapshot(route, ['/login']);
  }
  return true;
};
