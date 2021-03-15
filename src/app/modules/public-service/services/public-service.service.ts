import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {NewPublicServiceWaterI, PublicServiceWaterI} from '../interfaces/interfaces';

@Injectable()
export class PublicServiceService {

  constructor(private http: HttpClient) {
  }

  getWaterList(): Observable<PublicServiceWaterI[]> {
    return this.http.get<PublicServiceWaterI[]>(environment.serverUrl + '/api/public-service-water');
  }

  getWater(id: string): Observable<PublicServiceWaterI> {
    return this.http.get<PublicServiceWaterI>(environment.serverUrl + '/api/public-service-water/' + id);
  }

  createWater(water: NewPublicServiceWaterI): Observable<PublicServiceWaterI> {
    return this.http.post<PublicServiceWaterI>(environment.serverUrl + '/api/public-service-water/', water);
  }

  deleteWater(id: string): Observable<any> {
    return this.http.delete<any>(environment.serverUrl + '/api/public-service-water/' + id);
  }
}
