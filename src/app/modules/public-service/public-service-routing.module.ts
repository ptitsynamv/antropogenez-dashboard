import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WaterListComponent} from './components/water-list/water-list.component';
import {WaterComponent} from './components/water/water.component';

const routes: Routes = [
  {
    path: '',
    component: WaterListComponent,
  },
  {
    path: ':id',
    component: WaterComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})

export class PublicServiceRoutingModule {

}
