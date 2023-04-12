/*Author: Sumit Kumar B00904097*/
import { CoreService } from './../../services/core.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private coreService: CoreService) { }

  ngOnInit(): void {
    this.coreService.updateMenuItems(["home", "facilities", "tournament", "aboutus"], true);
  }

}
