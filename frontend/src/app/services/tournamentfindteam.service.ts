// Author : Venkata Vijaya Rama Raju Mandapati
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TournamentfindteamService {

  tournamentFindTeamApiUrl: string = environment.apiServer + "/tfiteam";

  constructor(private http: HttpClient) { }

  getHeader() {
    const options = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('sessiontoken') ?? ''
      })
    };
    return options;
  }

  getAlltournamentFindTeams() : Observable<any>{
    return this.http.get(this.tournamentFindTeamApiUrl, this.getHeader());
  }
}
