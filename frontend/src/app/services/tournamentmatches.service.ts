// Author : Venkata Vijaya Rama Raju Mandapati
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TournamentmatchesService {

  tournamentMatchesApiUrl: string = environment.apiServer + "/tmatch";

  constructor(private http: HttpClient) { }

    getHeader() {
    const options = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('sessiontoken') ?? ''
      })
    };
    return options;
  }

  getAlltournamentMatches() : Observable<any>{
    return this.http.get(this.tournamentMatchesApiUrl, this.getHeader());
  }

  getAlltournamentPastMatches() : Observable<any>{
    return this.http.get(this.tournamentMatchesApiUrl+"/past", this.getHeader());
  }

  getAlltournamentPresentMatches() : Observable<any>{
    return this.http.get(this.tournamentMatchesApiUrl+"/present", this.getHeader());
  }

  getAlltournamentFutureMatches() : Observable<any>{
    return this.http.get(this.tournamentMatchesApiUrl+"/future", this.getHeader());
  }
}
