/*Author: Sumit Kumar B00904097*/
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  
  bookingApiUrl: string = environment.apiServer + "/booking";

  constructor(private http: HttpClient) { }

  getHeader() {
    const options = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('sessiontoken') ?? ''
      })
    };
    return options;
  }

  createBooking(data: any) : Observable<any> {
    return this.http.post(this.bookingApiUrl, data, this.getHeader());
  }

  getAllBooking() : Observable<any> {
    return this.http.get(this.bookingApiUrl, this.getHeader());
  }

  getAllSlots(id: string, courtid: string) : Observable<any> {
    return this.http.get(this.bookingApiUrl + '/slot/' + id + '/' + courtid, this.getHeader());
  }

  getAllSlotsByDate(id: string, courtid: string, date: Date) : Observable<any>  {
    return this.http.get(this.bookingApiUrl + '/slot/' + id + '/' + courtid + '/' + date.toDateString() , this.getHeader());
  }

  getUpcomingBookings(userid:any): Observable<any>{
    return this.http.get(this.bookingApiUrl+"/"+userid,this.getHeader());
  }

}
