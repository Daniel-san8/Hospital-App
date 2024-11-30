import { TestBed } from '@angular/core/testing';

import { ReqHttpService } from './req-http.service';

describe('ReqHttpService', () => {
  let service: ReqHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReqHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
