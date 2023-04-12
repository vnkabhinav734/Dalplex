// Author : Venkata Vijaya Rama Raju Mandapati
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SportsCategory } from 'src/app/interfaces/SportsCategory';
import { TournamentLeagues } from 'src/app/interfaces/TournamentLeagues';
import { CategoryService } from 'src/app/services/category.service';
import { TournamentleaguesService } from 'src/app/services/tournamentleagues.service';

@Component({
  selector: 'app-tournamentleagues',
  templateUrl: './tournamentleagues.component.html',
  styleUrls: ['./tournamentleagues.component.css']
})
export class TournamentleaguesComponent implements OnInit {

  LEAGUE_DATA!: TournamentLeagues[];
  sportsCategoryDetails!: SportsCategory[];

  constructor(private tournamentleaguesService: TournamentleaguesService,
    private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getAlltournamentleaguesData();
    this.getSports();
  }

  getAlltournamentleaguesData() {
    this.tournamentleaguesService.getAlltournamentLeagues().subscribe((data: TournamentLeagues[]) => {
      this.LEAGUE_DATA = data;
      this.applyfilter();
    });
  }

  getSports(){
    this.categoryService.getAllSportsCategory().subscribe((data) => {
      this.sportsCategoryDetails = data;
    });
  }

  selectedSport!: string;

  // 5 s
  displayedColumns = ['league', 'slots', 'match', 'register'];
  // dataSource = new MatTableDataSource(this.LEAGUE_DATA);
  dataSource = this.LEAGUE_DATA;
  // 5 e

  toggle(index:number): void {  
    this.LEAGUE_DATA.find(item => item._id == index)!.register = 
    this.LEAGUE_DATA.find(item => item._id == index)!.register === 'Register' ? 'Cancel' : 'Register';

    this.LEAGUE_DATA.find(item => item._id == index)!.slots = 
    this.LEAGUE_DATA.find(item => item._id == index)!.register === 
            'Register' 
          ? this.LEAGUE_DATA.find(item => item._id == index)!.slots +1 
          : this.LEAGUE_DATA.find(item => item._id == index)!.slots -1;
  }

  applyfilter(){
    // this.dataSource.filter = this.selectedSport;
    if (this.selectedSport) {
    this.dataSource = this.LEAGUE_DATA.filter(e => e.sport == this.selectedSport);
    } else {
      this.dataSource = this.LEAGUE_DATA
    }
  }
    
}
