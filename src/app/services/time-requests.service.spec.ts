import { TestBed } from '@angular/core/testing';

import { TimeRequestsService } from './time-requests.service';

describe('TimeRequestsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TimeRequestsService = TestBed.get(TimeRequestsService);
    expect(service).toBeTruthy();
  });
});
