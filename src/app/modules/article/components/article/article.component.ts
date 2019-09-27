import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {Article} from "../../interfaces/interfaces";
import {ArticleService} from "../../services/article.service";
import {ActivatedRoute} from "@angular/router";
import {switchMap} from "rxjs/operators";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit, OnDestroy {
  article: Article;
  isLoading = true;
  subscription: Subscription;

  constructor(
    protected articleService: ArticleService,
    protected activatedRoute: ActivatedRoute,
    protected titleService: Title,
  ) {
  }

  ngOnInit() {
    this.subscription = this.activatedRoute.paramMap.pipe(
      switchMap(params => this.articleService.getArticle(params.get("id")))
    )
      .subscribe(article => {
        this.titleService.setTitle(article.subject);
        this.article = article;
        this.isLoading = false;
      })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}
