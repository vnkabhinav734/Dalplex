import { CoreService } from './../../services/core.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-landing-page',
  templateUrl: './user-landing-page.component.html',
  styleUrls: ['./user-landing-page.component.css']
})
export class UserLandingPageComponent implements OnInit {

  constructor(private coreService: CoreService) { }

  ngOnInit(): void {
    this.coreService.updateMenuItems(["login", "signup", "aboutus"], false, false);
  }

}
