import { TestBed } from '@angular/core/testing';

import { StudentsProgressService } from './students-progress.service';

describe('StudentsProgressService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentsProgressService = TestBed.get(StudentsProgressService);
    expect(service).toBeTruthy();
  });
});
