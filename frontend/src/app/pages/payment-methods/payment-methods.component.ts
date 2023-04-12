/*Author: Sumit Kumar B00904097*/
import { CoreService } from 'src/app/services/core.service';
import { PaymentService } from './../../services/payment.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { PaymentMethodDetails } from 'src/app/interfaces/PaymentMethodDetails';
import { AddPaymentDialogComponent } from '../add-payment-dialog/add-payment-dialog.component';

@Component({
  selector: 'app-payment-methods',
  templateUrl: './payment-methods.component.html',
  styleUrls: ['./payment-methods.component.css']
})
export class PaymentMethodsComponent implements OnInit {

  @ViewChild(MatTable) table!: MatTable<any>;
  displayedColumns: string[] = ['id', 'name', 'cardNumber', 'expiryDate', 'securityCode', 'postalCode'];
  dataSource!: PaymentMethodDetails[];

  constructor(private dialog: MatDialog, private paymentService: PaymentService, private coreService: CoreService) { }

  ngOnInit(): void {
    this.getPaymentMethods();
  }

  getPaymentMethods() {
    this.paymentService.getPaymentMethodDetails().subscribe((data) => {
      this.dataSource = data.filter((item: any) => item.userid == localStorage.getItem('userid'));
    });
  }

  showAddPaymentDialog() {
    const dialogRef = this.dialog.open(AddPaymentDialogComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const data = {userid: localStorage.getItem('userid'), name: result.name, cardnumber: result.cardNumber, expirydate: result.expiryDate, cvv: result.securityCode, postalcode: result.postalCode};
        this.paymentService.addNewPaymentMethod(data).subscribe((data: any) => {
          this.coreService.showSnackBar("Payment method added successfully");
          this.getPaymentMethods();
        });
        this.table.renderRows();
      }
    });
  }

}
