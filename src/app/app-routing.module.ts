import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NotFoundComponent} from "./components/not-found/not-found.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'articles',
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: () => import('./modules/core/core.module').then(m => m.CoreModule),
  },
  {
    path: 'articles',
    loadChildren: () => import('./modules/article/article.module').then(m => m.ArticleModule),
  },
  {
    path: 'f-articles',
    loadChildren: () => import('./modules/f-article/f-article.module').then(m => m.FArticleModule),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})

export class AppRoutingModule {

}
