import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginOauth2Component } from './login-oauth2.component';

describe('LoginOauth2Component', () => {
  let component: LoginOauth2Component;
  let fixture: ComponentFixture<LoginOauth2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginOauth2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginOauth2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
