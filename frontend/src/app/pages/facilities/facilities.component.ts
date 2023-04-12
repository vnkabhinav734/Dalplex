// Author : Venkata Vijaya Rama Raju Mandapati
import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { FacilitiesService } from 'src/app/services/facilities.service';
import { Facility } from 'src/app/interfaces/Facilities';

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.css'],

  animations: [
    trigger('hours', [
      state('hours, void', style({ height: '0px', visibility: 'hidden' })),
      state('details', style({ height: '*', visibility: 'visible' })),
      transition('details <=> hours, void => hours',
        animate('150ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),

    trigger('details', [
      state('hours, void', style({ height: '*', visibility: 'visible' })),
      state('details', style({ height: '0px', visibility: 'hidden' })),
      transition('details <=> hours, void => hours',
        animate('150ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])
  ]

})
export class FacilitiesComponent implements OnInit {

  facilities!: Facility[];

  // 8 
  cols! : number;

  gridByBreakpoint = {
    xl: 4,
    lg: 4,
    md: 3,
    sm: 2,
    xs: 1
  }

  constructor(private breakpointObserver: BreakpointObserver, private facilitiesService: FacilitiesService) {
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge,
    ]).subscribe(result => {
      if (result.matches) {
        if (result.breakpoints[Breakpoints.XSmall]) {
          this.cols = this.gridByBreakpoint.xs;
        }
        if (result.breakpoints[Breakpoints.Small]) {
          this.cols = this.gridByBreakpoint.sm;
        }
        if (result.breakpoints[Breakpoints.Medium]) {
          this.cols = this.gridByBreakpoint.md;
        }
        if (result.breakpoints[Breakpoints.Large]) {
          this.cols = this.gridByBreakpoint.lg;
        }
        if (result.breakpoints[Breakpoints.XLarge]) {
          this.cols = this.gridByBreakpoint.xl;
        }
      }
    });
  }
  // 8
  
  ngOnInit(): void {
    this.getAllFacilitiesData();
  }

  getAllFacilitiesData() {
    this.facilitiesService.getAllFacilities().subscribe((data: Facility[]) => {
      this.facilities = data;
    });
  }

  toggle(index:number): void {  
 
    this.facilities.find(item => item._id == index)!.state = 
    this.facilities.find(item => item._id == index)!.state === 'hours' ? 'details' : 'hours';
  
    this.facilities.find(item => item._id == index)!.desc = 
    this.facilities.find(item => item._id == index)!.desc === 'hours' ? 'details' : 'hours';

  }

}
