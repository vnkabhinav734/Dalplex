import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentleaguesComponent } from './tournamentleagues.component';

describe('TournamentleaguesComponent', () => {
  let component: TournamentleaguesComponent;
  let fixture: ComponentFixture<TournamentleaguesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TournamentleaguesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentleaguesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
