import {Component} from '@angular/core';
import {Auth2Service} from "../../services/auth2-service";


@Component({
  selector: 'app-login-oauth2',
  templateUrl: './login-oauth2.component.html',
  styleUrls: ['./login-oauth2.component.less']
})
export class LoginOauth2Component {

  constructor( protected authService: Auth2Service,) {
    authService.login()
  }

}
