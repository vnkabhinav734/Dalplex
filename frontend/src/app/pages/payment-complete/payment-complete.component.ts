import { CoreService } from './../../services/core.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InvoiceService } from 'src/app/services/invoice.service';

@Component({
  selector: 'app-payment-complete',
  templateUrl: './payment-complete.component.html',
  styleUrls: ['./payment-complete.component.css']
})
export class PaymentCompleteComponent implements OnInit {
  invoiceId!:string;
  bookings!:any;
  username!:string;
  date!:Date;
  price!:string;

  constructor(private coreService: CoreService,private route: ActivatedRoute,private invoiceService: InvoiceService) { }

  ngOnInit(): void {
    this.coreService.updateMenuItems(["home", "facilities", "tournament", "aboutus"], false);
    this.invoiceId = this.route.snapshot.params['id'];
    this.invoiceService.getUserInvoice(this.invoiceId).subscribe((data)=>{
      this.bookings=data.items;
      this.date=data.createdat;
      this.price=data.total;
    });
  }

}
