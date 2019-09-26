import {Component, OnDestroy, OnInit} from '@angular/core';
import {ArticleService} from "../../services/article.service";
import {Subscription} from "rxjs";
import {Article, ArticleList} from "../../interfaces/interfaces";
import {Router} from "@angular/router";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit, OnDestroy {
  articles: Article[];
  isLoading = true;
  subscriptions: Subscription[] = [];
  count;
  pageSize = 10;

  constructor(
    protected articleService: ArticleService,
    protected router: Router,
    protected titleService: Title
  ) {
    titleService.setTitle('Статьи');
  }

  ngOnInit() {
    this.subscriptions.push(
      this.articleService.getArticles(0, this.pageSize)
        .subscribe((articleList: ArticleList) => {
          this.articles = articleList.list;
          this.count = articleList.count;
          this.isLoading = false;
        })
    )
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe())
  }


  onClick(id: string) {
    this.router.navigate(['/article', id])
  }

  handlePage(e: any) {
    this.iterator(e.pageIndex)
  }

  protected iterator(offset = 0) {
    this.subscriptions.push(
      this.articleService.getArticles(offset)
        .subscribe((articleList: ArticleList) => {
          this.articles = articleList.list;
        })
    )
  }
}
