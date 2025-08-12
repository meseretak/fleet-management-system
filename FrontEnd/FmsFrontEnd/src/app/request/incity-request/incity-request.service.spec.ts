import { TestBed } from '@angular/core/testing';

import { IncityRequestService } from './incity-request.service';

describe('IncityRequestService', () => {
  let service: IncityRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IncityRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
