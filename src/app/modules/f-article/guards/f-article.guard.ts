import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {UserRoleE} from '../../core/interfaces/interfaces';
import {Auth2Service} from '../../core/services/auth2-service';
import {of} from 'rxjs/internal/observable/of';

@Injectable()
export class FArticleGuard implements CanActivate {

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
