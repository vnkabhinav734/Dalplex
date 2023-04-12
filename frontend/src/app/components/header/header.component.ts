/*Author: Sumit Kumar B00904097*/
import { MenuItems } from './../../interfaces/MenuItems';
import { CoreService } from './../../services/core.service';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menuItems!: MenuItems;
  count!:number;

  constructor(private router:Router, private userService: UserService, private coreService: CoreService,private cartService: CartService) { }

  ngOnInit(): void {
    this.coreService.getMenuItems().subscribe((data) => {
      this.menuItems = data;
    });
    if(localStorage.getItem('userid')) {
      this.cartService.getItemsCount({"userid":localStorage.getItem('userid')}).subscribe((data)=>{
        this.cartService.updateCount(data);
      })
      this.cartService.count$.subscribe(
        (count) => {
          this.count = count;
        }
      );
    }
  }

  logout() {
    this.userService.logout().subscribe((data) => {
      localStorage.removeItem('sessiontoken');
      localStorage.removeItem('userid');
      localStorage.removeItem('role');
      this.router.navigate(['/landing']);
    }, (err: HttpErrorResponse) => {console.log(err)});
  }
}
