import {Component, OnInit} from '@angular/core';
import {PublicServiceService} from '../../services/public-service.service';
import {PublicServiceWaterI} from '../../interfaces/interfaces';
import {mergeMap} from 'rxjs/operators';
import {NotificationService} from '../../../core/services/notification.service';

@Component({
  selector: 'app-water-list',
  templateUrl: './water-list.component.html',
  styleUrls: ['./water-list.component.less'],
})
export class WaterListComponent implements OnInit {
  public waterList: PublicServiceWaterI[];
  public isLoading = true;

  constructor(
    private publicServiceService: PublicServiceService,
    private notificationService: NotificationService,
  ) {
  }

  public ngOnInit(): void {
    this.publicServiceService.getWaterList()
      .subscribe((waterList) => {
        this.waterList = waterList;
        this.isLoading = false;
      });
  }

  public onClickDelete(id: string): void {
    this.isLoading = true;
    this.publicServiceService.deleteWater(id)
      .pipe(
        mergeMap(() => this.publicServiceService.getWaterList()),
      )
      .subscribe((waterList) => {
        this.notificationService.successNotification.next('Water data was deleted');
        this.waterList = waterList;
        this.isLoading = false;
      });
  }

}
