import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CoreModule} from './modules/core/core.module';
import {ToastrModule} from 'ngx-toastr';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {AppComponent} from './components/app/app.component';
import {ApiService} from './modules/core/services/api.service';
import {NotificationService} from './modules/core/services/notification.service';
import {MainComponent} from './components/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CoreModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    ApiService,
    NotificationService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
