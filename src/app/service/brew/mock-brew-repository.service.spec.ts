import { TestBed } from '@angular/core/testing';

import { MockBrewRepositoryService } from './mock-brew-repository.service';

describe('MockBrewRepositoryService', () => {
  let service: MockBrewRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockBrewRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
