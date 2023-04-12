import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsCategoryComponent } from './sports-category.component';

describe('SportsCategoryComponent', () => {
  let component: SportsCategoryComponent;
  let fixture: ComponentFixture<SportsCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportsCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
