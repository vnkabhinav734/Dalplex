import { TestBed } from '@angular/core/testing';

import { TournamentfindteamService } from './tournamentfindteam.service';

describe('TournamentfindteamService', () => {
  let service: TournamentfindteamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TournamentfindteamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
