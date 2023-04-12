//Author: Falgun Jairaj Thakwani B009302083
import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { Time } from '@angular/common';
import { CartService } from 'src/app/services/cart.service';

// TODO: Replace this with your own data model type

export interface ListViewItem {
  userid:String,
  username: String,
  items:[{
    _id:String
    court_id:String,
    court_img:String,
    program:String,
    interval: String,
    price: String,
    bookingstatus: String,
    bookingdate:Date,
  }],
  status:String,
  updatedat: Date,
  createdat: Date,
  subTotal:number,
  tax:number,
  discount:number,
  total:number,
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: ListViewItem[] = [];

/**
 * Data source for the ListView view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ListViewDataSource extends DataSource<ListViewItem> {

  data!: ListViewItem
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor(private cartService:CartService) {
    super();
  }

  loadDataSource(){
    this.cartService.getCart(localStorage.getItem('userid')).subscribe((data)=>{
      this.data.userid=data.userid;
      this.data.username=data.username;
      this.data.items=data.items;
      this.data.status=data.status;
      this.data.tax= 0;
      this.data.createdat=data.createdat;
      this.data.updatedat=data.updatedat;
      this.data.discount=data.disconnect;
      this.data.total=data.total;
      this.data.subTotal=data.subtotal;
    })
  }
  connect(collectionViewer: CollectionViewer): Observable<readonly ListViewItem[]> {
    throw new Error('Method not implemented.');
  }
  disconnect(collectionViewer: CollectionViewer): void {
    throw new Error('Method not implemented.');
  }
}
