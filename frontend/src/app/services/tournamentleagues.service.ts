// Author : Venkata Vijaya Rama Raju Mandapati
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TournamentleaguesService {

  tournamentLeaguesApiUrl: string = environment.apiServer + "/tleague";

  constructor(private http: HttpClient) { }

  getHeader() {
    const options = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('sessiontoken') ?? ''
      })
    };
    return options;
  }

  getAlltournamentLeagues() : Observable<any>{
    return this.http.get(this.tournamentLeaguesApiUrl, this.getHeader());
  }
}
