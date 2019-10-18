import { TestBed } from '@angular/core/testing';

import { StudentRequestsService } from './student-requests.service';

describe('StudentRequestsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentRequestsService = TestBed.get(StudentRequestsService);
    expect(service).toBeTruthy();
  });
});
