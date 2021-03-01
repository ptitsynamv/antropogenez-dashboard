import { TestBed, async, inject } from '@angular/core/testing';

import { FArticleGuard } from './f-article.guard';

describe('FArticleGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FArticleGuard]
    });
  });

  it('should ...', inject([FArticleGuard], (guard: FArticleGuard) => {
    expect(guard).toBeTruthy();
  }));
});
