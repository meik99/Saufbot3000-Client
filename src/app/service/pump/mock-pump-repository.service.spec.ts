import { TestBed } from '@angular/core/testing';

import { MockPumpRepositoryService } from './mock-pump-repository.service';

describe('MockPumpRepositoryService', () => {
  let service: MockPumpRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockPumpRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
