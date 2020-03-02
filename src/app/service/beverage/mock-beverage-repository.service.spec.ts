import { TestBed } from '@angular/core/testing';

import { MockBeverageRepositoryService } from './mock-beverage-repository.service';

describe('MockBeverageRepositoryService', () => {
  let service: MockBeverageRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockBeverageRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
