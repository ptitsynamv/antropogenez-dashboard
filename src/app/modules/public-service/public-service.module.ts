import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WaterListComponent} from './components/water-list/water-list.component';
import {WaterComponent} from './components/water/water.component';
import {PublicServiceRoutingModule} from './public-service-routing.module';
import {CoreModule} from '../core/core.module';
import {PublicServiceService} from './services/public-service.service';


@NgModule({
  declarations: [WaterListComponent, WaterComponent],
  imports: [
    CommonModule,
    PublicServiceRoutingModule,
    CoreModule,
  ],
  providers: [
    PublicServiceService,
  ],
})
export class PublicServiceModule {
}
