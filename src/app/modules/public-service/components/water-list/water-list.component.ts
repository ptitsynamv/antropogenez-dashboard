import {Component, OnInit} from '@angular/core';
import {PublicServiceService} from '../../services/public-service.service';
import {Observable} from 'rxjs';
import {WaterI} from '../../interfaces/interfaces';

@Component({
  selector: 'app-water-list',
  templateUrl: './water-list.component.html',
  styleUrls: ['./water-list.component.less'],
})
export class WaterListComponent implements OnInit {
  public waterList$: Observable<WaterI[]> = this.publicServiceService.getWater();

  constructor(private publicServiceService: PublicServiceService) {
  }

  ngOnInit() {
  }

}
