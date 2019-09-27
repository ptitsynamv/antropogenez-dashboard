import {Injectable} from "@angular/core";
import {from, Observable, of} from "rxjs";
import {catchError} from "rxjs/operators";
import {AuthConfig, JwksValidationHandler, OAuthEvent, OAuthService} from "angular-oauth2-oidc";

@Injectable({
  providedIn: 'root',
})

export class Auth2Service {
  constructor(
    protected oauthService: OAuthService,
  ) {
    const authConfig: AuthConfig = {
      redirectUri: window.location.origin + '/articles',
      clientId: 'antropogenez-client-id',
      responseType: 'token',
      scope: 'api',
      showDebugInformation: true,
      oidc: false,
      timeoutFactor: 0.8,
      requireHttps: false,

      issuer: 'http://localhost:3001',
      loginUrl: 'http://localhost:3001/oauth2/authorize',
      userinfoEndpoint: 'http://localhost:3001/user/userinfo',
      // silentRefreshRedirectUri: 'http://localhost:3001/silentRefreshRedirectUri',
      // logoutUrl: 'http://localhost:3001logout',
      // postLogoutRedirectUri: 'http://localhost:3001/dashboard',
    };

    oauthService.events.subscribe((event: OAuthEvent) => {
      switch (event.type) {
        case 'invalid_nonce_in_state':
          // this.login();
          break;
        case 'user_profile_loaded':
          // this.isError.next(false);
          // this.isProfileLoaded.next(true);
          break;
        case 'user_profile_load_error':
          // this.isError.next(true);
          break;
        case 'logout':
          break;
      }
      // TODO delete debug data
      console.warn('event', event);
    });

    oauthService.configure(authConfig);
    oauthService.setupAutomaticSilentRefresh();
    oauthService.tokenValidationHandler = new JwksValidationHandler();
  }

  public login(): void {
    this.oauthService.initImplicitFlow();
  }

  public logout(): void {
    this.oauthService.logOut();
  }

  public hasValidToken(): boolean {
    return this.oauthService.hasValidAccessToken();
  }

  public tryLogin(): Observable<boolean> {
    return from(this.oauthService.tryLogin());
  }

  public loadUserProfile() {
    // @ts-ignore
    return from(this.oauthService.loadUserProfile())
      .pipe(
        catchError((error) => of(error)),
      );
  }

  public getIdentityClaims() {
    return this.oauthService.getIdentityClaims();
  }

  public authorizationHeader() {
    return this.oauthService.authorizationHeader();
  }

}
