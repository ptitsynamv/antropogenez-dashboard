import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutOauth2Component } from './logout-oauth2.component';

describe('LogoutOauth2Component', () => {
  let component: LogoutOauth2Component;
  let fixture: ComponentFixture<LogoutOauth2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoutOauth2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutOauth2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
