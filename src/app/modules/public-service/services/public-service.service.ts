import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {NewPublicServiceWaterI, PublicServiceWaterI} from '../interfaces/interfaces';
import {ApiService} from '../../core/services/api.service';

@Injectable()
export class PublicServiceService {

  constructor(private apiService: ApiService) {
  }

  getWaterList(): Observable<PublicServiceWaterI[]> {
    return this.apiService.get<PublicServiceWaterI[]>('public-service-water');
  }

  getLastWater(): Observable<PublicServiceWaterI> {
    return this.apiService.get<PublicServiceWaterI>('public-service-water/last');
  }

  getWater(id: string): Observable<PublicServiceWaterI> {
    return this.apiService.get<PublicServiceWaterI>('public-service-water/' + id);
  }

  createWater(water: NewPublicServiceWaterI): Observable<PublicServiceWaterI> {
    return this.apiService.post<PublicServiceWaterI>('public-service-water/', water);
  }

  deleteWater(id: string): Observable<any> {
    return this.apiService.delete<any>('public-service-water/' + id);
  }
}
