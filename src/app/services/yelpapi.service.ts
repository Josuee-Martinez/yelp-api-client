import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YelpapiService {

  constructor(private http: HttpClient) { }

  getMeTheRestaurantDataNow(state, city, price): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/yelpapi/${state}/${city}/${price}`);
  }
}
