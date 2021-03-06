import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FArticlesComponent} from './components/f-articles/f-articles.component';
import {FArticleComponent} from './components/f-article/f-article.component';
import {FArticleRoutingModule} from './f-article-routing.module';
import {CoreModule} from '../core/core.module';
import {FArticlesService} from './services/f-articles.service';

@NgModule({
  declarations: [
    FArticlesComponent,
    FArticleComponent,
  ],
  imports: [
    CommonModule,
    FArticleRoutingModule,
    CoreModule,
  ],
  providers: [
    FArticlesService,
  ],
})
export class FArticleModule {
}
