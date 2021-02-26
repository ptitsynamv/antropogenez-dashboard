import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Article, ArticleList} from "../interfaces/interfaces";
import {Observable} from "rxjs";
import {environment} from '../../../../environments/environment';

@Injectable()
export class ArticleService {
  constructor(private http: HttpClient) {
  }

  getArticles(offset = 0, limit = 10): Observable<ArticleList> {
    const params = new HttpParams()
      .set('limit', limit.toString())
      .set('offset', offset.toString());
    return this.http.get<ArticleList>(environment.serverUrl + '/api/article', {params});
  }

  getArticle(id: string): Observable<Article> {
    return this.http.get<Article>(environment.serverUrl + '/api/article/' + id);
  }
}
