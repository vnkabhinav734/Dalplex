/*Author: Sumit Kumar B00904097*/
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-payment-dialog',
  templateUrl: './add-payment-dialog.component.html',
  styleUrls: ['./add-payment-dialog.component.css']
})
export class AddPaymentDialogComponent implements OnInit {

  addCardform!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AddPaymentDialogComponent>
  ) { }

  ngOnInit(): void {
    this.addCardform = this.formBuilder.group({
      name: ['', Validators.required],
      cardNumber: ['', Validators.required],
      expiryDate: ['', Validators.required],
      securityCode: ['', Validators.required],
      postalCode: ['', Validators.required]
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    if (this.addCardform.valid) {
      const payment = this.addCardform.value;
      this.dialogRef.close(payment);
    }
  }

}
