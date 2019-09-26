import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Article, ArticleList} from "../interfaces/interfaces";
import {Observable} from "rxjs";

@Injectable()
export class ArticleService {
  constructor(private http: HttpClient) {
  }

  getArticles(offset = 0, limit = 10): Observable<ArticleList> {
    const params = new HttpParams()
      .set('limit', limit.toString())
      .set('offset', offset.toString());
    return this.http.get<ArticleList>('/api/article', {params})
  }

  getArticle(id: string): Observable<Article> {
    return this.http.get<Article>('/api/article/' + id)
  }
}
