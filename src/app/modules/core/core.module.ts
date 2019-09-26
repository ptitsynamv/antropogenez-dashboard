import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthLayoutComponent} from "./components/auth-layout/auth-layout.component";
import {SiteLayoutComponent} from "./components/site-layout/site-layout.component";
import {MaterialService} from "./services/material.service";
import {RouterModule} from "@angular/router";
import {MatNativeDateModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DemoMaterialModule} from "../../material-module";

@NgModule({
  declarations: [
    AuthLayoutComponent,
    SiteLayoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    FormsModule,
    ReactiveFormsModule,
    DemoMaterialModule,
    MatNativeDateModule,
  ],
  providers: [
    MaterialService,
  ],
  exports:[
    FormsModule,
    ReactiveFormsModule,
    DemoMaterialModule,
    MatNativeDateModule,
  ]
})
export class CoreModule {
}
