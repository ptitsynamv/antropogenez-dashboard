import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ArticlesComponent} from "./components/articles/articles.component";
import {ArticleComponent} from "./components/article/article.component";
import {ArticleService} from "./services/article.service";
import {ArticleRoutingModule} from "./article-routing.module";
import {CoreModule} from "../core/core.module";

@NgModule({
  declarations: [
    ArticlesComponent,
    ArticleComponent,
  ],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    CoreModule,
  ],
  providers: [
    ArticleService,
  ],
})
export class ArticleModule {
}
