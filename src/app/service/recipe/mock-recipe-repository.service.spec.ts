import { TestBed } from '@angular/core/testing';

import { MockRecipeRepositoryService } from './mock-recipe-repository.service';

describe('MockRecipeRepositoryService', () => {
  let service: MockRecipeRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockRecipeRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
