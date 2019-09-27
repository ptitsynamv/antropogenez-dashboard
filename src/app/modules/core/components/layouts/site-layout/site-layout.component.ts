import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.scss']
})
export class SiteLayoutComponent {
  options: FormGroup;
  links = [
    {url: '/articles', name: 'Статьи'},
  ];

  constructor(
    private outh: AuthService,
    private router: Router,
    private fb: FormBuilder,
  ) {
    this.options = fb.group({
      bottom: 0,
      fixed: false,
      top: 0
    });
  }


  logout() {
    this.outh.logout();
    this.router.navigate(['/login'])
  }

}
