import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './components/app/app.component';
import {MobxAngularModule} from 'mobx-angular';
import {TodoComponent} from './components/todo/todo.component';
import {TodosStore} from "./store/todos-store";
import {TodosFilterStore} from "./store/todos-filter-store";
import {TodosService} from "./store/todos.service";

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MobxAngularModule,
  ],
  providers: [
    TodosStore,
    TodosFilterStore,
    TodosService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
