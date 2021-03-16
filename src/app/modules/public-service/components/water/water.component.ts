import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {PublicServiceService} from '../../services/public-service.service';
import {NewPublicServiceWaterI} from '../../interfaces/interfaces';
import {NotificationService} from '../../../core/services/notification.service';

@Component({
  selector: 'app-water',
  templateUrl: './water.component.html',
  styleUrls: ['./water.component.less'],
})
export class WaterComponent {
  public form = new FormGroup({
    data: new FormControl('', [
      Validators.required, Validators.minLength(1), Validators.maxLength(500),
    ]),
  });
  public isLoading = false;

  constructor(
    private publicServiceService: PublicServiceService,
    private router: Router,
    private notificationService: NotificationService,
  ) {
  }

  public onSubmit() {
    if (this.form.invalid) {
      return;
    }
    this.isLoading = true;

    const data: NewPublicServiceWaterI = this.form.getRawValue();
    this.publicServiceService.createWater(data)
      .subscribe(() => {
        this.isLoading = false;
        this.notificationService.successNotification.next('Water was created');
        this.router.navigate(['/public-service']);
      });
  }
}
