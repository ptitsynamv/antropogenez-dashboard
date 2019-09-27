import {Component} from '@angular/core';
import {Auth2Service} from "../../services/auth2-service";

@Component({
  selector: 'app-logout-oauth2',
  templateUrl: './logout-oauth2.component.html',
  styleUrls: ['./logout-oauth2.component.less']
})
export class LogoutOauth2Component {

  constructor(private auth2Service: Auth2Service) {
    auth2Service.logout()
  }

}
