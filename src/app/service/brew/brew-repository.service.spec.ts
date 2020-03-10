import { TestBed } from '@angular/core/testing';

import { BrewRepositoryService } from './brew-repository.service';

describe('BrewRepositoryService', () => {
  let service: BrewRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrewRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
