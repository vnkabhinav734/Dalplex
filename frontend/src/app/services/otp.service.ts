/*Author: Sumit Kumar B00904097*/
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OtpService {

  otpApiUrl: string = environment.apiServer + "/otp";

  constructor(private http: HttpClient) { }

  getHeader() {
    const options = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('sessiontoken') ?? ''
      })
    };
    return options;
  }

  createOTP(data: any) : Observable<any> {
    return this.http.post(this.otpApiUrl, data);
  }
}
