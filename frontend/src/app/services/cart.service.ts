// Author:Falgun Jairaj Thakwani B00932083
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartApiUrl: string = environment.apiServer + "/cart";

  private count = new BehaviorSubject<number>(0);
  count$ = this.count.asObservable();

  constructor(private http: HttpClient) { }

  getHeader() {
    const options = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('sessiontoken') ?? ''
      })
    };
    return options;
  }

  getCart(data:any): Observable<any> {
    return this.http.get(this.cartApiUrl+"/getCart", this.getHeader());
  }

  getItemsCount(data:any): Observable<any> {
    return this.http.get(this.cartApiUrl+"/getItemsCount", this.getHeader());
  }

  addToCart(data: any) : Observable<any> {
    return this.http.post(this.cartApiUrl+"/addToCart", data, this.getHeader());
  }

  deleteFromCart(data:any): Observable<any> {
    return this.http.delete(this.cartApiUrl+"/deleteFromCart/"+ data.id, this.getHeader());
  }

  updateCount(newCount: number) {
    this.count.next(newCount);
  }
}
