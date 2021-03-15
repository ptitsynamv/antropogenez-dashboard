import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WaterListComponent} from './components/water-list/water-list.component';
import {WaterComponent} from './components/water/water.component';
import {AdminGuard} from '../core/guards/admin.guard';

const routes: Routes = [
  {
    path: '',
    component: WaterListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'create',
    component: WaterComponent,
    canActivate: [AdminGuard],
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
