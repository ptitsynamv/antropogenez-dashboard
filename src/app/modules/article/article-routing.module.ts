import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ArticlesComponent} from "./components/articles/articles.component";
import {ArticleComponent} from "./components/article/article.component";
import {SiteLayoutComponent} from "../core/components/site-layout/site-layout.component";
import {AuthGuard} from "../core/guards/auth.guard";

const routes: Routes = [
  {
    path: '',
    component: SiteLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {path: 'articles', component: ArticlesComponent},
      {path: 'article/:id', component: ArticleComponent},
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class ArticleRoutingModule {

}
