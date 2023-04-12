import { TestBed } from '@angular/core/testing';

import { TournamentRankingsService } from './tournament-rankings.service';

describe('TournamentRankingsService', () => {
  let service: TournamentRankingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TournamentRankingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
