import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {PublicServiceService} from '../../services/public-service.service';
import {PublicServiceWaterI, WaterFormI} from '../../interfaces/interfaces';
import {NotificationService} from '../../../core/services/notification.service';

@Component({
  selector: 'app-water',
  templateUrl: './water.component.html',
  styleUrls: ['./water.component.less'],
})
export class WaterComponent implements OnInit {
  public form = new FormGroup({
    address: new FormControl('ул. Власенко, д. 9, кв. 148', [
      Validators.required, Validators.minLength(1), Validators.maxLength(100),
    ]),
    hot1: new FormControl('', [
      Validators.required, Validators.minLength(1), Validators.maxLength(10),
    ]),
    hot1CounterName: new FormControl('Счетчик №с43001488', [
      Validators.required, Validators.minLength(1), Validators.maxLength(35),
    ]),
    hot2: new FormControl('', [
      Validators.required, Validators.minLength(1), Validators.maxLength(10),
    ]),
    hot2CounterName: new FormControl('Счетчик №с43001489', [
      Validators.required, Validators.minLength(1), Validators.maxLength(35),
    ]),
    cold1: new FormControl('', [
      Validators.required, Validators.minLength(1), Validators.maxLength(10),
    ]),
    cold1CounterName: new FormControl('Счетчик №17487392', [
      Validators.required, Validators.minLength(1), Validators.maxLength(35),
    ]),
    cold2: new FormControl('', [
      Validators.required, Validators.minLength(1), Validators.maxLength(10),
    ]),
    cold2CounterName: new FormControl('Счетчик №17487391', [
      Validators.required, Validators.minLength(1), Validators.maxLength(35),
    ]),
  });
  public isLoading = false;
  public waterDataText: string;
  public lastWater: PublicServiceWaterI;

  constructor(
    private publicServiceService: PublicServiceService,
    private router: Router,
    private notificationService: NotificationService,
  ) {
  }

  public ngOnInit(): void {
    this.publicServiceService.getLastWater()
      .subscribe((lastWater) => {
        if (lastWater.data) {
          this.lastWater = lastWater;
        }
      });
  }

  public onSubmit() {
    if (this.form.invalid) {
      return;
    }
    this.isLoading = true;

    const data: WaterFormI = this.form.getRawValue();
    const waterDataText = `
    ${data.address}
    Гарячая вода:
    ${data.hot1CounterName} - ${data.hot1}
    ${data.hot2CounterName} - ${data.hot2}
    Холодная вода:
    ${data.cold1CounterName} - ${data.cold1}
    ${data.cold2CounterName} - ${data.cold2}`;

    delete data.address;

    this.publicServiceService.createWater({data})
      .subscribe(() => {
        this.isLoading = false;
        this.notificationService.successNotification.next('Water was created');
        this.waterDataText = waterDataText;
      });
  }
}
