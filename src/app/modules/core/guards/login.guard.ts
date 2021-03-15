import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Auth2Service} from '../services/auth2-service';
import {of} from 'rxjs/internal/observable/of';
import {catchError, mergeMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  constructor(
    protected router: Router,
    protected authService: Auth2Service,
  ) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.tryLogin(next);
  }

  protected tryLogin(route: ActivatedRouteSnapshot): Observable<boolean> {
    return of(Boolean(route.fragment && /access_token.+expires_in.+state.+token_type.+/.test(route.fragment)))
      .pipe(
        mergeMap((isAuthorizeScenario) => {
          if (isAuthorizeScenario) {
            return this.authService.tryLogin();
          }
          return of(true);
        }),
        catchError(() => {
          this.router.navigate(['/']);
          return of(false);
        }),
      );
  }

}
