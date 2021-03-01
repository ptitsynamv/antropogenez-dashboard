import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FArticleGuard} from './guards/f-article.guard';
import {FArticlesComponent} from './components/f-articles/f-articles.component';
import {FArticleComponent} from './components/f-article/f-article.component';
import {SiteLayoutComponent} from '../core/components/layouts/site-layout/site-layout.component';

const routes: Routes = [
  {
    path: '',
    component: SiteLayoutComponent,
    canActivate: [FArticleGuard],
    children: [
      {path: '', component: FArticlesComponent},
      {path: ':id', component: FArticleComponent},
    ],
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
