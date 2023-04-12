import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsCategoryDetailComponent } from './sports-category-detail.component';

describe('SportsCategoryDetailComponent', () => {
  let component: SportsCategoryDetailComponent;
  let fixture: ComponentFixture<SportsCategoryDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportsCategoryDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsCategoryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
