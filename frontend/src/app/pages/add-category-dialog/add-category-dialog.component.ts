/*Author: Sumit Kumar B00904097*/
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-category-dialog',
  templateUrl: './add-category-dialog.component.html',
  styleUrls: ['./add-category-dialog.component.css']
})
export class AddCategoryDialogComponent implements OnInit {

  addCategoryform!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AddCategoryDialogComponent>
  ) { }

  ngOnInit(): void {
    this.addCategoryform = this.formBuilder.group({
      categoryname: ['', Validators.required],
      reason: ['', Validators.required]
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    if (this.addCategoryform.valid) {
      const category = this.addCategoryform.value;
      this.dialogRef.close(category);
    }
  }

}
