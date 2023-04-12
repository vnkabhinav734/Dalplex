/*Author: Sumit Kumar B00904097*/
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MembershipService {

  membershipApiUrl: string = environment.apiServer + "/membership";

  constructor(private http: HttpClient) { }

  getHeader() {
    const options = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('sessiontoken') ?? ''
      })
    };
    return options;
  }

  getMemberShipDetails(): Observable<any> {
    return this.http.get(this.membershipApiUrl, this.getHeader());
  }
}
