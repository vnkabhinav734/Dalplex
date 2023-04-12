/*Author: Sumit Kumar B00904097*/
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-court-dialog',
  templateUrl: './add-court-dialog.component.html',
  styleUrls: ['./add-court-dialog.component.css']
})
export class AddCourtDialogComponent implements OnInit {

  addCourtform!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AddCourtDialogComponent>
  ) { }

  ngOnInit(): void {
    this.addCourtform = this.formBuilder.group({
      courtnumber: ['', Validators.required],
      price: ['', Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    if (this.addCourtform.valid) {
      const court = this.addCourtform.value;
      this.dialogRef.close(court);
    }
  }

}
