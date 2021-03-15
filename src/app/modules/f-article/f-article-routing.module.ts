import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FArticlesComponent} from './components/f-articles/f-articles.component';
import {FArticleComponent} from './components/f-article/f-article.component';
import {FArticleGuard} from './guards/f-article.guard';

const routes: Routes = [
  {path: '', canActivate: [FArticleGuard], component: FArticlesComponent},
  {path: ':id', canActivate: [FArticleGuard], component: FArticleComponent},
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
