import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { catchError, throwError } from 'rxjs';

export const hospitalInterceptor: HttpInterceptorFn = (req, next) => {
  const ngxCookie = inject(CookieService);
  const token = ngxCookie.get('token');
  if (req.url.includes('/auth')) return next(req);

  const newRequest = req.clone({
    setHeaders: {
      Authorization: 'Bearer ' + token,
    },
  });

  return next(newRequest).pipe(catchError((err: any) => throwError(() => err)));
};
