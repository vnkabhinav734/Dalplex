/*Author: Sumit Kumar B00904097*/
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl: string = environment.apiServer + "/users";

  constructor(private http: HttpClient) { }

  login(email: string, password: string) : Observable<any>{
    const data = {email: email, password: password};
    return this.http.post(environment.apiServer + '/login', data);
  }

  logout() : Observable<any> {
    return this.http.post(environment.apiServer + '/logout', {});
  }

  register(data: any) : Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  forgotpassword(data:any): Observable<any>{
    return this.http.put(environment.apiServer+'/forgotpassword',data)
  }
}
