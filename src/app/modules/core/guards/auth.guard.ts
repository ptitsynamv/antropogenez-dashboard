import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {of} from "rxjs/internal/observable/of";
import {catchError, map, mergeMap} from "rxjs/operators";
import {Auth2Service} from "../services/auth2-service";

enum AuthorizeScenario {
  authorize = 'authorize',
  userIsAuthorized = 'userIsAuthorized',
  userIsNotAuthorized = 'userIsNotAuthorized',
}

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    protected router: Router,
    protected authService: Auth2Service,
  ) {

  }

  protected onNotLogin(): boolean {
    this.authService.logout();
    this.authService.login();
    return false;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return of(Boolean(route.fragment && /access_token.+expires_in.+state.+token_type.+/.test(route.fragment)))
      .pipe(
        map((isAuthorizeScenario) => {
          if (!isAuthorizeScenario) {
            if (!this.authService.hasValidToken()) {
              return AuthorizeScenario.userIsNotAuthorized;
            } else {
              return AuthorizeScenario.userIsAuthorized;
            }
          }
          return AuthorizeScenario.authorize;
        }),
        mergeMap((scenario) => {
          switch (scenario) {
            case AuthorizeScenario.authorize:
              return this.authService.tryLogin();
            case AuthorizeScenario.userIsAuthorized:
              return of(true);
            case AuthorizeScenario.userIsNotAuthorized:
              return of(false);
          }
        }),
        map((isSuccess: boolean) => isSuccess ? true : this.onNotLogin()),
        catchError(() => of(this.onNotLogin())),
      );
  }
}
