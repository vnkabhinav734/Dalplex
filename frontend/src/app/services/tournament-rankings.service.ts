// Author : Venkata Vijaya Rama Raju Mandapati
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TournamentRankingsService {

  tournamentRankingsApiUrl: string = environment.apiServer + "/trank";

  constructor(private http: HttpClient) { }

    getHeader() {
    const options = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('sessiontoken') ?? ''
      })
    };
    return options;
  }

  getAlltournamentRankings() : Observable<any>{
    return this.http.get(this.tournamentRankingsApiUrl, this.getHeader());
  }
}
