import {NgModule} from '@angular/core';
import {LoginPageComponent} from "./components/login-page/login-page.component";
import {RegisterPageComponent} from "./components/register-page/register-page.component";
import {RouterModule, Routes} from "@angular/router";
import {AuthLayoutComponent} from "./components/layouts/auth-layout/auth-layout.component";
import {LoginOauth2Component} from "./components/login-oauth2/login-oauth2.component";
import {LogoutOauth2Component} from "./components/logout-oauth2/logout-oauth2.component";

const routes: Routes = [
  {path: 'login-oauth', component: LoginOauth2Component},
  {path: 'logout-oauth', component: LogoutOauth2Component},
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {path: '', redirectTo: '/login', pathMatch: 'full'},
      {path: 'login', component: LoginPageComponent},
      {path: 'register', component: RegisterPageComponent},
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class CoreRoutingModule {

}
