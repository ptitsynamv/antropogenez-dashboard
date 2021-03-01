import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Auth2Service} from "../../../services/auth2-service";

@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.scss']
})
export class SiteLayoutComponent implements OnInit {
  options: FormGroup;
  links = [
    {url: '/articles', name: 'Статьи'},
    {url: '/f-articles', name: 'F Статьи'},
  ];

  constructor(
    private auth2Service: Auth2Service,
    private fb: FormBuilder,
  ) {
    this.options = fb.group({
      bottom: 0,
      fixed: false,
      top: 0
    });
  }

  ngOnInit() {
  }

  logout() {
    this.auth2Service.logout();
    window.location.reload();
  }
}
