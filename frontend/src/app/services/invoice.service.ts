/*Author: Sumit Kumar B00904097*/
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  invoiceApiUrl: string = environment.apiServer + "/invoice";
  constructor(private http: HttpClient) { }

  getHeader() {
    const options = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('sessiontoken') ?? ''
      })
    };
    return options;
  }

  getAllInvoices(): Observable<any> {
    return this.http.get(this.invoiceApiUrl, this.getHeader());
  }

  getUserInvoice(data: any): Observable<any> {
    return this.http.get(this.invoiceApiUrl + "/" + data, this.getHeader());
  }

}
