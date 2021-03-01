import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FArticleComponent } from './f-article.component';

describe('FArticleComponent', () => {
  let component: FArticleComponent;
  let fixture: ComponentFixture<FArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
