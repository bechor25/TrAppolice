import { Injectable } from '@angular/core';
import { ipInfo } from '../product/models/ipinfo';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GeolocationService {

  constructor(private http: HttpClient) { }

  getGeoLoc(){
   return this.http.get<ipInfo>('https://ipinfo.io/json');
  }

}
