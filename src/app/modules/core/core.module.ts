import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SiteLayoutComponent} from "./components/layouts/site-layout/site-layout.component";
import {RouterModule} from "@angular/router";
import {MatNativeDateModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DemoMaterialModule} from "../../material-module";
import {AuthGuard} from "./guards/auth.guard";
import {OAuthModule} from "angular-oauth2-oidc";

@NgModule({
  declarations: [
    SiteLayoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    FormsModule,
    ReactiveFormsModule,
    DemoMaterialModule,
    MatNativeDateModule,
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
