import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Auth2Service} from '../services/auth2-service';
import {catchError, map} from 'rxjs/operators';
import {UserRoleE} from '../interfaces/interfaces';
import {of} from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {

  constructor(
    protected router: Router,
    protected authService: Auth2Service,
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.getUserRole()
      .pipe(
        map((role) => role === UserRoleE.ADMIN),
        catchError((error) => {
          this.router.navigate(['/']);
          this.authService.logout();
          return of(false);
        }),
      );
  }
}
