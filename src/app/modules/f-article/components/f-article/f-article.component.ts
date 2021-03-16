import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {Subscription} from 'rxjs';
import {FArticlesService} from '../../services/f-articles.service';
import {of} from 'rxjs/internal/observable/of';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FArticle} from '../../interfaces/interfaces';
import {NotificationService} from '../../../core/services/notification.service';

@Component({
  selector: 'app-f-article',
  templateUrl: './f-article.component.html',
  styleUrls: ['./f-article.component.less'],
})
export class FArticleComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  public form = new FormGroup({
    id: new FormControl(''),
    title: new FormControl('', [
      Validators.required, Validators.minLength(1), Validators.maxLength(150),
    ]),
    url: new FormControl('', [
      Validators.required, Validators.minLength(1), Validators.maxLength(150),
    ]),
  });

  constructor(
    private activatedRoute: ActivatedRoute,
    private fArticlesService: FArticlesService,
    private router: Router,
    private notificationService: NotificationService,
  ) {
  }

  public ngOnInit(): void {
    this.subscriptions.push(
      this.activatedRoute.paramMap.pipe(
        switchMap((params) => {
          const id = params.get('id');
          if (id === 'create') {
            return of(null);
          }
          return this.fArticlesService.getArticle(id);
        }),
      )
        .subscribe((article: FArticle) => {
          if (article) {
            this.form.patchValue({
              id: article.id,
              title: article.title,
              url: article.url,
            });
          }
        }),
    );
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }

  public onSubmit() {
    if (this.form.invalid) {
      return;
    }

    const data: FArticle = this.form.getRawValue();
    if (data.id) {
      this.subscriptions.push(
        this.fArticlesService.updateArticle(data)
          .subscribe(() => {
            this.notificationService.successNotification.next('F article was updated');
            this.router.navigate(['/f-articles']);
          }),
      );
    } else {
      this.subscriptions.push(
        this.fArticlesService.createArticle(data)
          .subscribe(() => {
            this.notificationService.successNotification.next('F article was created');
            this.router.navigate(['/f-articles']);
          }),
      );
    }
  }

  public onDelete(): void {
    this.subscriptions.push(
      this.fArticlesService.deleteArticle(this.form.controls.id.value)
        .subscribe(() => {
          this.notificationService.successNotification.next('F article was deleted');
          this.router.navigate(['/f-articles']);
        }),
    );
  }
}
