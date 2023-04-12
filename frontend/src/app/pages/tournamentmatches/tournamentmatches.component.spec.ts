import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentmatchesComponent } from './tournamentmatches.component';

describe('TournamentmatchesComponent', () => {
  let component: TournamentmatchesComponent;
  let fixture: ComponentFixture<TournamentmatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TournamentmatchesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentmatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
