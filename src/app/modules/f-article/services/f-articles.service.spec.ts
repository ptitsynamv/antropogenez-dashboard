import { TestBed } from '@angular/core/testing';

import { FArticlesService } from './f-articles.service';

describe('FArticlesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FArticlesService = TestBed.get(FArticlesService);
    expect(service).toBeTruthy();
  });
});
