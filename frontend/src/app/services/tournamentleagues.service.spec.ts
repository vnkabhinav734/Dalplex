import { TestBed } from '@angular/core/testing';

import { TournamentleaguesService } from './tournamentleagues.service';

describe('TournamentleaguesService', () => {
  let service: TournamentleaguesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TournamentleaguesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
