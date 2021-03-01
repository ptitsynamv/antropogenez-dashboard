import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {FArticle, FArticlesResponse} from '../interfaces/interfaces';
import {Article} from '../../article/interfaces/interfaces';

@Injectable()
export class FArticlesService {

  constructor(private http: HttpClient) {
  }

  getArticles(): Observable<FArticlesResponse> {
    return this.http.get<FArticlesResponse>(environment.serverUrl + '/api/f-article');
  }

  getArticle(id: string): Observable<FArticle> {
    return this.http.get<FArticle>(environment.serverUrl + '/api/f-article/' + id);
  }

  createArticle(fArticle: FArticle): Observable<FArticle> {
    return this.http.post<FArticle>(environment.serverUrl + '/api/f-article/', fArticle);
  }

  updateArticle(fArticle: FArticle): Observable<FArticle> {
    return this.http.put<FArticle>(environment.serverUrl + '/api/f-article/' + fArticle.id, fArticle);
  }

  deleteArticle(id: string): Observable<FArticle> {
    return this.http.delete<any>(environment.serverUrl + '/api/f-article/' + id);
  }
}
