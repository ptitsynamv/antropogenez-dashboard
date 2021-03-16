import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {of} from "rxjs/internal/observable/of";
import {catchError, map, tap} from "rxjs/operators";
import {Auth2Service} from "../services/auth2-service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    protected router: Router,
    protected authService: Auth2Service,
  ) {

  }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
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
    this.router.navigate(['/']);
    return false;
  }
}
