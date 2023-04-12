/*Author: Sumit Kumar B00904097*/
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MenuItems } from '../interfaces/MenuItems';

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  
  menuItems: MenuItems = {
    items: [
      {id: 1, name: 'login', displayName: 'Log In', route: '/login', show: true, icon: 'login'},
      {id: 2, name: 'signup', displayName: 'Sign Up', route: '/register', show: true, icon: 'person_add'},
      {id: 2, name: 'home', displayName: 'Home', route: '/categories', show: true, icon: 'home'},
      {id: 3, name: 'facilities', displayName: 'Facilities', route: '/facilities', show: true, icon: 'business'},
      {id: 4, name: 'tournament', displayName: 'Tournament', route: '/tournaments', show: true, icon: 'emoji_events'},
      {id: 5, name: 'aboutus', displayName: 'About us', route: '/about', show: true, icon: 'info'}
    ],
    showCart: true,
    showProfile: true
  };

  constructor(private snackBar: MatSnackBar) { }

  showSnackBar(message: string, action: string = 'ok') {
    this.snackBar.open(message, action, {
      duration: 1000,
      verticalPosition: 'top'
    });
  }

  updateMenuItems(names: string[], showCart: boolean, showProfile: boolean = true): void {
    this.menuItems.items.forEach(item => {
      item.show = names.includes(item.name) || false;
    });
    this.menuItems.showCart = showCart;
    this.menuItems.showProfile = showProfile;
  }

  getMenuItems() : Observable<MenuItems> {
    return of(this.menuItems);
  }
  
}
