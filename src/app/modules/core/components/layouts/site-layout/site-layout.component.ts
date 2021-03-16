import {Component, OnInit} from '@angular/core';
import {Auth2Service} from '../../../services/auth2-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.scss'],
})
export class SiteLayoutComponent implements OnInit {
  public links = [
    {url: '/articles', name: 'Статьи'},
    {url: '/f-articles', name: 'F Статьи'},
    {url: '/public-service', name: 'Public Service'},
  ];
  public isLogged: boolean;

  constructor(
    private auth2Service: Auth2Service,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.checkToken();
  }

  logout() {
    this.auth2Service.logout();
    this.router.navigate(['/']);

    this.checkToken();
  }

  login() {
    this.auth2Service.login();
  }

  private checkToken(): void {
    this.isLogged = this.auth2Service.hasValidToken();
  }
}
