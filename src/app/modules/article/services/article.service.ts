import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Article, ArticleResponse} from "../interfaces/interfaces";
import {Observable} from "rxjs";

@Injectable()
export class ArticleService {
  constructor(private http: HttpClient) {
  }

  getArticles(limit: number = 10, offset: number = 0): Observable<ArticleResponse> {
    const params = new HttpParams()
      .set('limit', limit.toString())
      .set('offset', offset.toString());

    return this.http.get<ArticleResponse>('/api/article', {params: params})
  }

  getArticle(id: string): Observable<Article> {
    const params = new HttpParams().set('id', id);

    // @ts-ignore
    return this.http.get('/api/article', {params: params})
      .pipe(
        map((response: ArticleResponse) => response.data),
      )
  }
}
