import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentrankingsComponent } from './tournamentrankings.component';

describe('TournamentrankingsComponent', () => {
  let component: TournamentrankingsComponent;
  let fixture: ComponentFixture<TournamentrankingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TournamentrankingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentrankingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
