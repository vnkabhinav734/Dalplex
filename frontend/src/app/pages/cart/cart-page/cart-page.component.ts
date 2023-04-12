//Author: Falgun Jairaj Thakwani B009302083
import { CoreService } from './../../../services/core.service';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ListViewItem } from '../components/list-view/list-view-datasource';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  isLoading: boolean = false;
  data!:ListViewItem;

  displayedColumns: string[] = ["delete","image","program","bookingDate","price"];
  constructor(private coreService: CoreService,private cartService:CartService) {

  }

  ngOnInit(): void {
    this.coreService.updateMenuItems(["home", "facilities", "tournament", "aboutus"], false);
    this.isLoading = true;
    this.cartService.getCart({"userid":localStorage.getItem('userid')}).subscribe((data)=>{
    this.data=data;
    this.isLoading = false;
    }, (error) => {
      this.isLoading = false;
    });

  }



  deleteItem(id:any): void{
    this.isLoading = true;
    this.cartService.deleteFromCart({"id":id,"userid":localStorage.getItem('userid')}).subscribe((data) => {
      this.data=data;
      this.isLoading = false;
    }, (error) => {
      this.isLoading = false;
    });
  }
}
