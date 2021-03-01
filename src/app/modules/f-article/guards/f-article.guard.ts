import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthGuard} from '../../core/guards/auth.guard';
import {map, mergeMap} from 'rxjs/operators';
import {UserRoleE} from '../../core/interfaces/interfaces';
import {of} from 'rxjs/internal/observable/of';

@Injectable()
export class FArticleGuard extends AuthGuard {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return super.canActivate(route, state)
      .pipe(
        mergeMap((isAllow) => {
          if (isAllow) {
            return this.authService.getUserRole()
              .pipe(
                map((role) => role === UserRoleE.ADMIN),
              );
          }
          return of(false);
        }),
      );
  }
}
