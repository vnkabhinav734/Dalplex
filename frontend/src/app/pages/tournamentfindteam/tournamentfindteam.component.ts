// Author : Venkata Vijaya Rama Raju Mandapati
import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { TournamentFindTeam } from 'src/app/interfaces/TournamentFindTeam';
import { TournamentfindteamService } from 'src/app/services/tournamentfindteam.service';
import { SportsCategory } from 'src/app/interfaces/SportsCategory';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-tournamentfindteam',
  templateUrl: './tournamentfindteam.component.html',
  styleUrls: ['./tournamentfindteam.component.css']
})
export class TournamentfindteamComponent implements OnInit {

  cards!: TournamentFindTeam[];
  sportsCategoryDetails!: SportsCategory[];

  cols! : number;

  gridByBreakpoint = {
    xl: 3,
    lg: 3,
    md: 2,
    sm: 1,
    xs: 1
  }


  constructor(private breakpointObserver: BreakpointObserver,
    private tournamentfindteamService: TournamentfindteamService,
    private categoryService: CategoryService) {

    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge,
    ]).subscribe(result => {
      if (result.matches) {
        if (result.breakpoints[Breakpoints.XSmall]) {
          this.cols = this.gridByBreakpoint.xs;
        }
        if (result.breakpoints[Breakpoints.Small]) {
          this.cols = this.gridByBreakpoint.sm;
        }
        if (result.breakpoints[Breakpoints.Medium]) {
          this.cols = this.gridByBreakpoint.md;
        }
        if (result.breakpoints[Breakpoints.Large]) {
          this.cols = this.gridByBreakpoint.lg;
        }
        if (result.breakpoints[Breakpoints.XLarge]) {
          this.cols = this.gridByBreakpoint.xl;
        }
      }
    });
  }
  // 8

  ngOnInit(): void {
    this.getAlltournamentfindteamData();
    this.getSports();
  }

  getAlltournamentfindteamData() {
    this.tournamentfindteamService.getAlltournamentFindTeams().subscribe((data: TournamentFindTeam[]) => {
      this.cards = data;
      this.applyfilter();
    });
  }

  getSports(){
    this.categoryService.getAllSportsCategory().subscribe((data) => {
      this.sportsCategoryDetails = data;
    });
  }

  selectedSport!: string;

  dataSource = this.cards;

  toggle(index:number): void {  
    this.cards.find(item => item._id == index)!.reqState = 
    this.cards.find(item => item._id == index)!.reqState === 'Request' ? 'Cancel Request' : 'Request';
  }

  applyfilter(){
    if(this.selectedSport) {
      this.dataSource = this.cards.filter(e => e.sport == this.selectedSport);
    } else {
      this.dataSource = this.cards;
    }
   }
}
