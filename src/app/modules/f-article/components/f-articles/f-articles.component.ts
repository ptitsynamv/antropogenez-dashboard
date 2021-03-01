import {Component, OnInit} from '@angular/core';
import {FArticlesService} from '../../services/f-articles.service';
import {Observable} from 'rxjs';
import {FArticlesResponse} from '../../interfaces/interfaces';

@Component({
  selector: 'app-f-articles',
  templateUrl: './f-articles.component.html',
  styleUrls: ['./f-articles.component.less'],
})
export class FArticlesComponent {
  public articles$: Observable<FArticlesResponse> = this.fArticlesService.getArticles();

  constructor(private fArticlesService: FArticlesService) {
  }


}
