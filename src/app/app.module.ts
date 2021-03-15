import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {MobxAngularModule} from 'mobx-angular';
import {TodoComponent} from './components/todo/todo.component';
import {TodosStore} from "./store/todos-store";
import {TodosFilterStore} from "./store/todos-filter-store";
import {TodosService} from "./store/todos.service";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CoreModule} from "./modules/core/core.module";
import {ToastrModule} from 'ngx-toastr';
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {AppComponent} from './components/app/app.component';
import {ApiService} from './modules/core/services/api.service';
import {NotificationService} from './modules/core/services/notification.service';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    NotFoundComponent,
    MainComponent,
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
    ApiService,
    NotificationService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
