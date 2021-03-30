import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-update-dialog',
  templateUrl: './update-dialog.component.html',
  styleUrls: ['./update-dialog.component.css']
})
export class UpdateDialogComponent implements OnInit {

  updateProductForm : FormGroup;

  constructor(private dialogRef: MatDialogRef<UpdateDialogComponent>, @Inject(MAT_DIALOG_DATA) private data) {
    this.updateProductForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      quantity: new FormControl('', [Validators.required, Validators.min(0)]),
      price: new FormControl('', [Validators.required, Validators.min(2)]),
      createdAt: new FormControl(''),
      updatedAt: new FormControl('')
    });
   }

  ngOnInit(): void {
    this.updateProductForm.patchValue(this.data);
    this.updateProductForm.get('updatedAt').setValue(new Date());
  }

  updateProduct()
  {
    // Close the dialog, return Object updated
    this.dialogRef.close(this.updateProductForm.value);
  }

  onDismiss(): void {
    // Close the dialog, return null
    this.dialogRef.close(null);
  }

}
