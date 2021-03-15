import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FArticlesComponent} from './components/f-articles/f-articles.component';
import {FArticleComponent} from './components/f-article/f-article.component';
import {AdminGuard} from '../core/guards/admin.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [AdminGuard],
    component: FArticlesComponent,
  },
  {
    path: ':id',
    canActivate: [AdminGuard],
    component: FArticleComponent,
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

export class FArticleRoutingModule {

}
