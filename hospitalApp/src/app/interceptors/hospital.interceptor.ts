import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { catchError, throwError } from 'rxjs';
import * as CryptoJS from 'crypto-js';
import { chaveSecreta } from '../key';

export const hospitalInterceptor: HttpInterceptorFn = (req, next) => {
  const ngxCookie = inject(CookieService);
  const token = ngxCookie.get('token');
  const tokenDecrypted = CryptoJS.AES.decrypt(token, chaveSecreta);
  const tokenStr = tokenDecrypted.toString(CryptoJS.enc.Utf8);

  if (req.url.includes('/auth'))
    return next(req).pipe(catchError((err: any) => throwError(() => err)));

  const newRequest = req.clone({
    setHeaders: {
      Authorization: 'Bearer ' + tokenStr,
    },
  });

  return next(newRequest).pipe(catchError((err: any) => throwError(() => err)));
};
