import { TestBed } from '@angular/core/testing';

import { OfftimeRequestService } from './offtime-request.service';

describe('OfftimeRequestService', () => {
  let service: OfftimeRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfftimeRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
