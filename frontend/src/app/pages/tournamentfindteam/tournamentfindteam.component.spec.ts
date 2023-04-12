import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentfindteamComponent } from './tournamentfindteam.component';

describe('TournamentfindteamComponent', () => {
  let component: TournamentfindteamComponent;
  let fixture: ComponentFixture<TournamentfindteamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TournamentfindteamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentfindteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
