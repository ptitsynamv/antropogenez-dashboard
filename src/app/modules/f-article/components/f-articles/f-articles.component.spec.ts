import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FArticlesComponent } from './f-articles.component';

describe('FArticlesComponent', () => {
  let component: FArticlesComponent;
  let fixture: ComponentFixture<FArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
