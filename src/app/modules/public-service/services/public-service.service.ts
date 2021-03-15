import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {WaterI} from '../interfaces/interfaces';

@Injectable()
export class PublicServiceService {

  constructor(private http: HttpClient) {
  }

  getWater(): Observable<WaterI[]> {
    return this.http.get<WaterI[]>(environment.serverUrl + '/api/public-service-water');
  }

  createWater(water: WaterI): Observable<WaterI> {
    return this.http.post<WaterI>(environment.serverUrl + '/api/public-service-water/', water);
  }
}
