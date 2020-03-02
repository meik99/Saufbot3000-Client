import { TestBed } from '@angular/core/testing';

import { BeverageRepositoryService } from './beverage-repository.service';

describe('BeverageRepositoryService', () => {
  let service: BeverageRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeverageRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
