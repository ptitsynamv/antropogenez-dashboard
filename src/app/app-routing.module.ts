import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'articles',
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: () => import('./modules/core/core.module').then(m => m.CoreModule)
  },
  {
    path: '',
    loadChildren: () => import('./modules/article/article.module').then(m => m.ArticleModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {

}
