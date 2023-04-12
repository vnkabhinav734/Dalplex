/*Author: Sumit Kumar B00904097*/
import { MembershipService } from './../../services/membership.service';
import { MembershipDetails } from './../../interfaces/MembershipDetails';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css']
})
export class MembershipComponent implements OnInit {

  displayedColumns: string[] = ['id', 'type', 'startDate', 'endDate', 'reNew', 'cardInfo'];
  dataSource!: MembershipDetails[];
  
  constructor(private membershipService: MembershipService) { }

  ngOnInit(): void {
    this.membershipService.getMemberShipDetails().subscribe((data) => {
      this.dataSource = data;
    });
  }

}
