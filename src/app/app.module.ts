import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MobxAngularModule} from 'mobx-angular';
import {TodoComponent} from './components/todo/todo.component';
import {TodosStore} from "./store/todos-store";
import {TodosFilterStore} from "./store/todos-filter-store";
import {TodosService} from "./store/todos.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {TokenInterceptor} from "./modules/core/services/token.interceptor";
import {CoreModule} from "./modules/core/core.module";
import {ToastrModule} from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MobxAngularModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CoreModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    TodosStore,
    TodosFilterStore,
    TodosService,
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: TokenInterceptor
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
