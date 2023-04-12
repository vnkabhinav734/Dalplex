// Author : Venkata Vijaya Rama Raju Mandapati
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilitycalendarComponent } from './facilitycalendar.component';

describe('FacilitycalendarComponent', () => {
  let component: FacilitycalendarComponent;
  let fixture: ComponentFixture<FacilitycalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacilitycalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilitycalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
