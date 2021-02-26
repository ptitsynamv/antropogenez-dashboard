import {Injectable} from "@angular/core";
import {from, Observable, of} from "rxjs";
import {catchError} from "rxjs/operators";
import {AuthConfig, JwksValidationHandler, OAuthEvent, OAuthService} from "angular-oauth2-oidc";
import {environment} from "../../../../environments/environment";
import {User} from "../interfaces/interfaces";

@Injectable({
  providedIn: 'root',
})

export class Auth2Service {

  constructor(
    protected oauthService: OAuthService,
  ) {
    const authConfig: AuthConfig = {
      redirectUri: window.location.origin + '/articles',
      clientId: environment.auth2ClientId,
      showDebugInformation: true,
      timeoutFactor: 0.8,
      requireHttps: false,
      issuer: environment.auth2Url + '/oauth2',

      oidc: false,
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
        case 'discovery_document_loaded':
          if (event['info'] && !oauthService.getIdentityClaims()) {
            this.loadUserProfile();
          }
          break;
        case 'logout':
          break;
      }
      console.warn('event', event);
    });

    oauthService.configure(authConfig);
    oauthService.setupAutomaticSilentRefresh();
    oauthService.tokenValidationHandler = new JwksValidationHandler();
    oauthService.loadDiscoveryDocument();
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

  public loadUserProfile(): Observable<User> {
    // @ts-ignore
    return from(this.oauthService.loadUserProfile())
      .pipe(
        catchError((error) => of(error)),
      );
  }

  public getIdentityClaims() {
    return this.oauthService.getIdentityClaims();
  }
}
