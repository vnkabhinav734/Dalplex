// Author : Venkata Vijaya Rama Raju Mandapati
import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Match } from 'src/app/interfaces/Match';
import { MatchTab } from 'src/app/interfaces/MatchTab';
import { TournamentMatches } from 'src/app/interfaces/TournamentMatches';
import { TournamentmatchesService } from 'src/app/services/tournamentmatches.service';

@Component({
  selector: 'app-tournamentmatches',
  templateUrl: './tournamentmatches.component.html',
  styleUrls: ['./tournamentmatches.component.css']
})

export class TournamentmatchesComponent implements OnInit {

  asyncTabs: Observable<MatchTab[]>;
  PRESENT_MATCH_DATA! :TournamentMatches[];
  FUTURE_MATCH_DATA! :TournamentMatches[];
  PAST_MATCH_DATA! :TournamentMatches[];

  // 4 s
  constructor(private tournamentmatchesService: TournamentmatchesService) {
    this.asyncTabs = new Observable((observer: Observer<MatchTab[]>) => {
      setTimeout(() => {
        observer.next([
          {label: 'Present Matches', content: this.PRESENT_MATCH_DATA},
          {label: 'Future Matches', content: this.FUTURE_MATCH_DATA},
          {label: 'Past Matches', content: this.PAST_MATCH_DATA},
        ]);
      }, 1000);
    });
  }
  // 4 e

  getAlltournamentPresentmatchesData() {
    this.tournamentmatchesService.getAlltournamentPresentMatches().subscribe((data: TournamentMatches[]) => {
      this.PRESENT_MATCH_DATA = data;
    });
  }

  getAlltournamentPastmatchesData() {
    this.tournamentmatchesService.getAlltournamentPastMatches().subscribe((data: TournamentMatches[]) => {
      this.PAST_MATCH_DATA = data;
    });
  }

  getAlltournamentFuturematchesData() {
    this.tournamentmatchesService.getAlltournamentFutureMatches().subscribe((data: TournamentMatches[]) => {
      this.FUTURE_MATCH_DATA = data;
    });
  }


  ngOnInit(): void {
    this.getAlltournamentPresentmatchesData();
    this.getAlltournamentFuturematchesData();
    this.getAlltournamentPastmatchesData();
  }

  // 5
  columns = [
    // {
    //   columnDef: '_id',
    //   header: 'Id.',
    //   cell: (element: TournamentMatches) => `${element._id}`,
    // },
    {
      columnDef: 'match',
      header: 'Match name',
      cell: (element: TournamentMatches) => `${element.match}`,
    },
    {
      columnDef: 'matchinfo',
      header: 'Match Info',
      cell: (element: TournamentMatches) => `${element.matchinfo}`,
    },
    {
      columnDef: "date",
      header: 'Date',
      cell: (element: TournamentMatches) => `${element.date}`,
      // .toISOString().split('T')[0]
    },
    {
      columnDef: 'time',
      header: 'Time',
      cell: (element: TournamentMatches) => `${element.time}`,
    },
    {
      columnDef: 'venue',
      header: 'Venue',
      cell: (element: TournamentMatches) => `${element.venue}`,
    }
  ];

  displayedColumns = this.columns.map(c => c.columnDef);
  // 5

}

// 5 s
const PAST_MATCH_DATA1: Match[] = [
  {id: 1, match: 'Match 1', datetime: '5-04-2022 10:00AM', matchinfo: 'Team X vs Team Y', venue:"dalplex court 4"},
  {id: 2, match: 'Match 2', datetime: '4-04-2022 10:00AM', matchinfo: 'Team A vs Team Y', venue:"dalplex court 1"},
  {id: 3, match: 'Match 3', datetime: '6-04-2022 10:00AM', matchinfo: 'Team B vs Team X', venue:"dalplex court 3"},
];

const PRESENT_MATCH_DATA1: Match[] = [
  {id: 4, match: 'Match 4', datetime: '9-03-2023 10:00AM', matchinfo: 'Team X vs Team Z', venue:"dalplex court 4"},
  {id: 5, match: 'Match 5', datetime: '10-03-2023 10:00AM', matchinfo: 'Team X vs Team A', venue:"dalplex court 2"},
  {id: 6, match: 'Match 6', datetime: '12-03-2023 10:00AM', matchinfo: 'Team C vs Team B', venue:"dalplex court 1"},
];

const FUTURE_MATCH_DATA1: Match[] = [
  {id: 7, match: 'Match 7', datetime: '14-04-2023 10:00AM', matchinfo: 'Team D vs Team E', venue:"dalplex court 2"},
  {id: 8, match: 'Match 8', datetime: '15-04-2023 10:00AM', matchinfo: 'Team X vs Team F', venue:"dalplex court 1"},
  {id: 9, match: 'Match 9', datetime: '18-04-2023 10:00AM', matchinfo: 'Team Z vs Team Y', venue:"dalplex court 4"},
  {id: 10, match: 'Match 10', datetime: '5-04-2023 10:00AM', matchinfo: 'Team C vs Team Y', venue:"dalplex court 5"},
];
// 5 e