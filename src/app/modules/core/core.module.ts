import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthLayoutComponent} from "./components/auth-layout/auth-layout.component";
import {SiteLayoutComponent} from "./components/site-layout/site-layout.component";
import {RouterModule} from "@angular/router";
import {MatNativeDateModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DemoMaterialModule} from "../../material-module";
import {CoreRoutingModule} from "./core-routing.module";
import {LoginPageComponent} from "./components/login-page/login-page.component";
import {RegisterPageComponent} from "./components/register-page/register-page.component";

@NgModule({
  declarations: [
    AuthLayoutComponent,
    SiteLayoutComponent,
    LoginPageComponent,
    RegisterPageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    FormsModule,
    ReactiveFormsModule,
    DemoMaterialModule,
    MatNativeDateModule,
    CoreRoutingModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    DemoMaterialModule,
    MatNativeDateModule,
  ]
})
export class CoreModule {
}
