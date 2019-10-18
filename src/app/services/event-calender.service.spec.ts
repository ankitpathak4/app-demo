import { TestBed } from '@angular/core/testing';

import { EventCalenderService } from './event-calender.service';

describe('EventCalenderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventCalenderService = TestBed.get(EventCalenderService);
    expect(service).toBeTruthy();
  });
});
