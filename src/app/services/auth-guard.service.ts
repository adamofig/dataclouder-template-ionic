import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree, Route, UrlSegment } from '@angular/router';

import { from, fromEvent, Observable, of } from 'rxjs';
import { mergeMap, concatMap, tap, first, catchError } from 'rxjs/operators';
import { FirebaseAuthService } from './firebase-auth.service';
import { UserService } from '../user-module/user.service';
import { ToastAlertService } from './toast.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService {
  constructor(
    private fbAuthService: FirebaseAuthService,
    private router: Router,
    private userService: UserService,
    private toastAlertService: ToastAlertService
  ) {}

  offlineEvent = fromEvent(window, 'offline');

  public canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    console.log('AuthGuardService -> canActivate -> next', next);
    return this.isAuthAndLoaded$();
  }

  private isAuthAndLoaded$(): Observable<boolean | UrlTree> {
    const user = this.userService.user;

    return this.fbAuthService.authState$.pipe(
      tap(isAuth => {
        console.log('AuthGuardService -> isAuthAndLoaded$ -> isAuth', isAuth);
      }),
      concatMap(isAuth => {
        if (!isAuth) {
          return of(this.router.parseUrl('/auth/login'));
        }

        if (user) {
          return of(true);
        }

        return from(this.userService.findUserWithToken()).pipe(
          mergeMap(user => {
            if (user) {
              console.log('AuthGuardService -> isAuthAndLoaded$ -> user', user);
              return of(true);
            }
            return of(this.router.parseUrl('/not-found'));
          }),
          catchError(error => {
            this.toastAlertService.error({ title: 'Error', subtitle: 'Failed to retrieve user data' });
            console.error('AuthGuardService -> isAuthAndLoaded$ -> error', error);
            return of(this.router.parseUrl('/not-found'));
          })
        );
      })
    );
  }
}
