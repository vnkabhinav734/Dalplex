// Author : Venkata Vijaya Rama Raju Mandapati
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Facility } from 'src/app/interfaces/Facilities';
import { FacilitiesService } from 'src/app/services/facilities.service';

@Component({
  selector: 'app-facilitycalendar',
  templateUrl: './facilitycalendar.component.html',
  styleUrls: ['./facilitycalendar.component.css']
})
export class FacilitycalendarComponent implements OnInit {

  facilities!: Facility[];

  filtersForm: FormGroup = new FormGroup({
    date: new FormControl(null,),
  });

  constructor(private _Activatedroute:ActivatedRoute
    , private facilitiesService: FacilitiesService) { }

  id: any;
  ngOnInit(): void {
    this.id=this._Activatedroute.snapshot.paramMap.get("id");
    this.selectedFacility =this.id;
    this.getAllFacilitiesData();
  }

  getAllFacilitiesData() {
    this.facilitiesService.getAllFacilities().subscribe((data: Facility[]) => {
      this.facilities = data;
      this.applyfilter();
    });
  }

  selectedFacility!: string ;
  
   displayedColumns = [
    'Date',
    'Slots', 'Booking'];
   dataSource = this.facilities;
   // 5 e

   applyfilter(){
    if(this.selectedFacility!="") {
      this.dataSource = this.facilities.filter(e => 
        e._id.toString() == this.selectedFacility);
    } else {
      this.dataSource = this.facilities;
    }
   }

}

