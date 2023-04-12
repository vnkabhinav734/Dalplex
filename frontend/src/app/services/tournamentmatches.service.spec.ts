import { TestBed } from '@angular/core/testing';

import { TournamentmatchesService } from './tournamentmatches.service';

describe('TournamentmatchesService', () => {
  let service: TournamentmatchesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TournamentmatchesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
