import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable()
export class NotificationService {
  public successNotification = new Subject<string>();
  private successNotification$ = this.successNotification.asObservable();

  public errorNotification = new Subject<string>();
  private errorNotification$ = this.errorNotification.asObservable();

  constructor(private snackBar: MatSnackBar) {
    this.successNotification$
      .subscribe((notification) => {
        this.snackBar.open(notification, 'Ok');
      });
    this.errorNotification$
      .subscribe((notification) => {
        this.snackBar.open(notification, 'Error');
      });
  }
}
