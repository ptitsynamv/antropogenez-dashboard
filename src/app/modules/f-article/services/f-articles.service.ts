import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {FArticle, FArticlesResponse} from '../interfaces/interfaces';
import {ApiService} from '../../core/services/api.service';

@Injectable()
export class FArticlesService {

  constructor(private apiService: ApiService) {
  }

  getArticles(): Observable<FArticlesResponse> {
    return this.apiService.get<FArticlesResponse>('f-article');
  }

  getArticle(id: string): Observable<FArticle> {
    return this.apiService.get<FArticle>('f-article/' + id);
  }

  createArticle(fArticle: FArticle): Observable<FArticle> {
    return this.apiService.post<FArticle>('f-article/', fArticle);
  }

  updateArticle(fArticle: FArticle): Observable<FArticle> {
    return this.apiService.put<FArticle>('f-article/' + fArticle.id, fArticle);
  }

  deleteArticle(id: string): Observable<FArticle> {
    return this.apiService.delete<any>('f-article/' + id);
  }
}
