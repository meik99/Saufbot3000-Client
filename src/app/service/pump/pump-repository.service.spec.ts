import { TestBed } from '@angular/core/testing';

import { PumpRepositoryService } from './pump-repository.service';

describe('PumpRepositoryService', () => {
  let service: PumpRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PumpRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
