import {Injectable} from "@angular/core";
import {HttpParams} from "@angular/common/http";
import {Article, ArticleList} from "../interfaces/interfaces";
import {Observable} from "rxjs";
import {ApiService} from '../../core/services/api.service';

@Injectable()
export class ArticleService {
  constructor(private apiService: ApiService) {
  }

  getArticles(offset = 0, limit = 10): Observable<ArticleList> {
    const params = new HttpParams()
      .set('limit', limit.toString())
      .set('offset', offset.toString());
    return this.apiService.get<ArticleList>('article', {params});
  }

  getArticle(id: string): Observable<Article> {
    return this.apiService.get<Article>('article/' + id);
  }
}
