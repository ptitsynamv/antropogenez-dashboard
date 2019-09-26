import {Component, OnDestroy, OnInit} from '@angular/core';
import {ArticleService} from "../../services/article.service";
import {Subscription} from "rxjs";
import {Article, ArticleResponse} from "../../interfaces/interfaces";
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
  totalSize = 100;
  pageSize = 10;
  currentPage = 0;

  constructor(
    protected articleService: ArticleService,
    protected router: Router,
    protected titleService: Title
  ) {
  }

  ngOnInit() {
    this.subscriptions.push(
      this.articleService.getArticles()
        .subscribe((articleResponse: ArticleResponse) => {
          this.articles = articleResponse.data;
          this.totalSize = articleResponse.totalSize;
          this.titleService.setTitle('Статьи');
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
    this.currentPage = e.pageIndex;
    console.log(this.currentPage)
  }

  iterator() {
    this.subscriptions.push(
      this.articleService.getArticles()
        .subscribe((articleResponse: ArticleResponse) => {
          this.articles = articleResponse.data;
        })
    )
  }
}
