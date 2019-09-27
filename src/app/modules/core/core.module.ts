import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthLayoutComponent} from "./components/layouts/auth-layout/auth-layout.component";
import {SiteLayoutComponent} from "./components/layouts/site-layout/site-layout.component";
import {RouterModule} from "@angular/router";
import {MatNativeDateModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DemoMaterialModule} from "../../material-module";
import {CoreRoutingModule} from "./core-routing.module";
import {LoginPageComponent} from "./components/login-page/login-page.component";
import {RegisterPageComponent} from "./components/register-page/register-page.component";
import {LoginOauth2Component} from './components/login-oauth2/login-oauth2.component';
import {LogoutOauth2Component} from './components/logout-oauth2/logout-oauth2.component';
import {AuthGuard} from "./guards/auth.guard";
import {OAuthModule} from "angular-oauth2-oidc";

@NgModule({
  declarations: [
    AuthLayoutComponent,
    SiteLayoutComponent,
    LoginPageComponent,
    RegisterPageComponent,
    LoginOauth2Component,
    LogoutOauth2Component,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    FormsModule,
    ReactiveFormsModule,
    DemoMaterialModule,
    MatNativeDateModule,
    CoreRoutingModule,
    OAuthModule.forRoot({
      resourceServer: {
        allowedUrls: ['/api'],
        sendAccessToken: true
      }
    }),
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    DemoMaterialModule,
    MatNativeDateModule,
  ],
  providers: [
    AuthGuard,
  ],
})
export class CoreModule {
}
