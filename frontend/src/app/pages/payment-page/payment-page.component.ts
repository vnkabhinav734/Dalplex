//Author: Falgun Jairaj Thakwani B009302083
import { CoreService } from './../../services/core.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PaymentMethodDetails } from 'src/app/interfaces/PaymentMethodDetails';
import { PaymentService } from 'src/app/services/payment.service';
import { AddPaymentDialogComponent } from '../add-payment-dialog/add-payment-dialog.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatRadioButton } from '@angular/material/radio';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent implements OnInit {

  availablePayments: PaymentMethodDetails[] = [];
  billingAddressForm: FormGroup;
  selectedOption!: string;
  isSelected:any=null;

  @ViewChild(MatRadioButton) radioButton!: MatRadioButton;

  constructor(private fb: FormBuilder, private dialog: MatDialog, private paymentService: PaymentService,  private route: Router, private coreService: CoreService) {
    this.billingAddressForm = this.fb.group({
      name: ['', [Validators.required]],
      streetNumber: ['', [Validators.required]],
      aptNumber: [''],
      city: ['', [Validators.required]],
      province: ['', [Validators.required]],
      pincode: ['', [Validators.required, Validators.pattern('^[A-Za-z][0-9][A-Za-z] ?[0-9][A-Za-z][0-9]$')]],
    });
  }

  ngOnInit(): void {
    this.coreService.updateMenuItems(["home", "facilities", "tournament", "aboutus"], false);
    this.getPaymentMethods();
  }

  getPaymentMethods() {
    this.paymentService.getPaymentMethodDetails().subscribe((data) => {
      this.availablePayments = data.filter((item: any) => item.userid == localStorage.getItem('userid'));
    });
  }

  showAddPaymentDialog() {
    const dialogRef = this.dialog.open(AddPaymentDialogComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const data = { userid: '', name: result.name, cardnumber: result.cardNumber, expirydate: result.expiryDate, cvv: result.securityCode, postalcode: result.postalCode };
        this.paymentService.addNewPaymentMethod(data).subscribe((data: any) => {
          this.coreService.showSnackBar("Payment method added successfully");
          this.paymentService.getPaymentMethodDetails().subscribe((data) => {
            this.availablePayments = data;
          });
        });
      }
    });
  }

  makePayment() {
    if(this.billingAddressForm.valid && this.isSelected){
      const data={
      name:this.name,
      streetNumber: this.streetNumber,
      aptNumber:this.aptNumber,
      city: this.city,
      province: this.province,
      pincode:this.pincode,
      card:this.selectedOption
      }
      this.paymentService.makePayment(data).subscribe((data:any)=>{
       this.route.navigate(['/payment-complete', data._id]);
      });
    }else{
      this.isSelected=false;
    }
  }

  updateSelection(value:any){
    this.selectedOption=value;
    this.isSelected=true;
  }

  get name() { return this.billingAddressForm.get('name')?.value; }
  get streetNumber() { return this.billingAddressForm.get('streetNumber')?.value; }
  get aptNumber() { return this.billingAddressForm.get('aptNumber')?.value; }
  get city() { return this.billingAddressForm.get('city')?.value; }
  get province() { return this.billingAddressForm.get('province')?.value; }
  get pincode() { return this.billingAddressForm.get('pincode')?.value; }
}
