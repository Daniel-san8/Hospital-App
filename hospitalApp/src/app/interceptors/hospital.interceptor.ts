import { HttpInterceptorFn } from '@angular/common/http';

export const hospitalInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
