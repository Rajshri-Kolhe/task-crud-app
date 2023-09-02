import { TestBed } from '@angular/core/testing';

import { HttpSerService } from './http-ser.service';

describe('HttpSerService', () => {
  let service: HttpSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
