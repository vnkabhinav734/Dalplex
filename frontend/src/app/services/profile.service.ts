/*Author: Sumit Kumar B00904097*/
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  profileApiUrl: string = environment.apiServer + "/profile";
  
  constructor(private http: HttpClient) { }

  getHeader() {
    const options = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('sessiontoken') ?? ''
      })
    };
    return options;
  }

  createProfile(data: any) : Observable<any> {
    return this.http.post(this.profileApiUrl, data, this.getHeader());
  }

  updateProfile(id: string, data: any) : Observable<any> {
    return this.http.put(this.profileApiUrl + '/' + id, data, this.getHeader());
  }

  getProfile() : Observable<any> {
    return this.http.get(this.profileApiUrl, this.getHeader());
  }
}
