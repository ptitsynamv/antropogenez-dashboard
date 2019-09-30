import {Injectable} from "@angular/core";
import {from, Observable, of} from "rxjs";
import {catchError} from "rxjs/operators";
import {AuthConfig, JwksValidationHandler, OAuthEvent, OAuthService} from "angular-oauth2-oidc";
import {environment} from "../../../../environments/environment";
import {action, computed, observable} from "mobx";
import {fromMobx} from "../../../store/getters";

@Injectable({
  providedIn: 'root',
})

export class Auth2Service {
  @computed
  public get userProfile$(): Observable<any> {
    // const a = !this.oauthService.getIdentityClaims() ? this.loadUserProfile() : of(this.oauthService.getIdentityClaims());
    // return a;
    of(null)
  };

  constructor(
    protected oauthService: OAuthService,
  ) {
    const authConfig: AuthConfig = {
      redirectUri: window.location.origin + '/articles',
      clientId: 'antropogenez-client-id',
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
          this.loadUserProfile();
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

  @action
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
}
