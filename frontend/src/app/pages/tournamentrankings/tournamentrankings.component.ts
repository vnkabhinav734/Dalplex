// Author : Venkata Vijaya Rama Raju Mandapati
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { SportsCategory } from 'src/app/interfaces/SportsCategory';
import { Tournament } from 'src/app/interfaces/Tournament';
import { TournamentRanking } from 'src/app/interfaces/TournamentRanking';
import { CategoryService } from 'src/app/services/category.service';
import { TournamentRankingsService } from 'src/app/services/tournament-rankings.service';
import { TournamentService } from 'src/app/services/tournament.service';

@Component({
  selector: 'app-tournamentrankings',
  templateUrl: './tournamentrankings.component.html',
  styleUrls: ['./tournamentrankings.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TournamentrankingsComponent implements OnInit {

  RANKING_DATA!: TournamentRanking[];
  sportsCategoryDetails!: SportsCategory[];
  tournaments!: Tournament[];
  
  constructor(private tournamentRankingService: TournamentRankingsService,
    private categoryService: CategoryService,
    private tournamentService: TournamentService) { }

  ngOnInit(): void {
    this.getAlltournamentRankingsData();
    this.getSports();
    this.getTournaments();
    this.applyfilter();
  }

  getAlltournamentRankingsData() {
    this.tournamentRankingService.getAlltournamentRankings().subscribe((data: TournamentRanking[]) => {
      this.RANKING_DATA = data;
    });
  }

  getSports(){
    this.categoryService.getAllSportsCategory().subscribe((data) => {
      this.sportsCategoryDetails = data;
    });
  }

  getTournaments(){
    this.tournamentService.getAlltournament().subscribe((data) => {
      this.tournaments = data;
    });
  }

  selectedTournament!: string ;
  selectedSport!: string ;
  
  // 5
  columns = [
    {
      columnDef: 'position',
      header: 'Position',
      cell: (element: TournamentRanking) => `${element.position}`,
    },
    {
      columnDef: 'name',
      header: 'Team Name',
      cell: (element: TournamentRanking) => `${element.name}`,
    },
    {
      columnDef: 'winrate',
      header: 'Win Rate',
      cell: (element: TournamentRanking) => `${element.winrate}`,
    },
    {
      columnDef: 'score',
      header: 'Score',
      cell: (element: TournamentRanking) => `${element.score}`,
    }
  ];
  // dataSource = new MatTableDataSource(RANKING_DATA);
  dataSource =this.RANKING_DATA;

  displayedColumns = this.columns.map(c => c.columnDef);


  applyfilter() {
    // this.dataSource.filter = this.selectedTournament;
    if(this.selectedTournament  && this.selectedSport) {
      this.dataSource = this.RANKING_DATA.filter(e => e.sport == this.selectedSport && e.tournament == this.selectedTournament);
    } else if (this.selectedTournament) {
      this.dataSource = this.RANKING_DATA.filter(e => e.tournament == this.selectedTournament);
    } else if (this.selectedSport) {
      this.dataSource = this.RANKING_DATA.filter(e => e.sport == this.selectedSport);
    } 
    else {
      this.dataSource = [];
    }
  }
  
  // 5

}

