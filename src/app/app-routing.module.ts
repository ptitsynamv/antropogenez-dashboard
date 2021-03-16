import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {SiteLayoutComponent} from './modules/core/components/layouts/site-layout/site-layout.component';
import {AuthGuard} from './modules/core/guards/auth.guard';
import {LoginGuard} from './modules/core/guards/login.guard';
import {MainComponent} from './components/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: SiteLayoutComponent,
    canActivate: [LoginGuard],
    children: [
      {
        path: '',
        component: MainComponent,
      },
      {
        path: 'articles',
        canActivate: [AuthGuard],
        loadChildren: () => import('./modules/article/article.module').then(m => m.ArticleModule),
      },
      {
        path: 'f-articles',
        canActivate: [AuthGuard],
        loadChildren: () => import('./modules/f-article/f-article.module').then(m => m.FArticleModule),
      },
      {
        path: 'public-service',
        canActivate: [AuthGuard],
        loadChildren: () => import('./modules/public-service/public-service.module').then(m => m.PublicServiceModule),
      },
    ],
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
