import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {ErrorResponse} from '../interfaces/interfaces';
import {NotificationService} from './notification.service';
import {Auth2Service} from './auth2-service';
import {environment} from '../../../../environments/environment';

@Injectable()
export class ApiService {
  private readonly SERVER_URL = environment.serverUrl + '/api/';

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private notificationService: NotificationService,
    private auth2Service: Auth2Service,
  ) {
  }

  public get<T>(url, options?: Record<string, unknown>): Observable<T | any> {
    return this.httpClient.get<T>(this.SERVER_URL + url, options)
      .pipe(catchError(this.handleError));
  }

  public post<T>(url, body: any | null, options?: Record<string, unknown>): Observable<T> {
    return this.httpClient.post<T>(this.SERVER_URL + url, body, options)
      .pipe(catchError(this.handleError));

  }

  public put<T>(url, body: any | null = null, options?: Record<string, unknown>): Observable<T> {
    return this.httpClient.put<T>(this.SERVER_URL + url, body, options)
      .pipe(catchError(this.handleError));
  }

  public delete<T>(url, options?: Record<string, unknown>): Observable<T> {
    return this.httpClient.delete<T>(this.SERVER_URL + url, options)
      .pipe(catchError(this.handleError));
  }

  public patch<T>(url, options?: Record<string, unknown>): Observable<T> {
    return this.httpClient.patch<T>(this.SERVER_URL + url, options)
      .pipe(catchError(this.handleError));
  }

  private handleError = (error) => {
    const errorResponse = new ErrorResponse(error);
    switch (errorResponse.code) {
      case 404:
        this.router.navigate(['404'], {skipLocationChange: true});
        break;
      case 401:
        this.auth2Service.logout();
        this.notificationService.errorNotification.next('Token expired');
        window.location.href = '/';
        break;
      default:

    }
    return throwError(errorResponse);
  };
}
