import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ArticlesComponent} from "./components/articles/articles.component";
import {ArticleComponent} from "./components/article/article.component";

const routes: Routes = [
  {
    path: '',
    component: ArticlesComponent,
  },
  {
    path: ':id',
    component: ArticleComponent,
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

export class ArticleRoutingModule {

}
