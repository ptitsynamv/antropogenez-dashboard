import {ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {of} from "rxjs/internal/observable/of";
import {catchError, map} from "rxjs/operators";
import {Auth2Service} from "../services/auth2-service";

@Injectable()
export class AuthGuard implements CanActivateChild {
  constructor(
    protected router: Router,
    protected authService: Auth2Service,
  ) {

  }

  public canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.hasToken();
  }

  protected hasToken(): Observable<boolean> {
    return of(this.authService.hasValidToken())
      .pipe(
        map((isSuccess: boolean) => isSuccess ? true : this.onNotLogin()),
        catchError(() => {
          this.router.navigate(['/']);
          return of(false);
        }),
      );
  }

  protected onNotLogin(): boolean {
    // this.authService.logout();
    this.router.navigate(['/']);
    // this.authService.login();
    return false;
  }
}
