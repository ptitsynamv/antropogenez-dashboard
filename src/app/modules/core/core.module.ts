import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SiteLayoutComponent} from "./components/layouts/site-layout/site-layout.component";
import {RouterModule} from "@angular/router";
import {MatNativeDateModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DemoMaterialModule} from "../../material-module";
import {AuthGuard} from "./guards/auth.guard";
import {OAuthModule} from "angular-oauth2-oidc";
import {MAT_SNACK_BAR_DEFAULT_OPTIONS} from '@angular/material/snack-bar';

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
    OAuthModule.forRoot(),
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    DemoMaterialModule,
    MatNativeDateModule,
  ],
  providers: [
    AuthGuard,
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      },
    },
  ],
})
export class CoreModule {
}
