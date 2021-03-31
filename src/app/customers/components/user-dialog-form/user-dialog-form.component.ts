import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-user-dialog-form',
  templateUrl: './user-dialog-form.component.html',
  styleUrls: ['./user-dialog-form.component.css']
})
export class UserDialogFormComponent implements OnInit {

  userForm : FormGroup;
  dialogTitle: string;
  constructor(private dialogRef: MatDialogRef<UserDialogFormComponent>, @Inject(MAT_DIALOG_DATA) private data) {
    this.userForm = new FormGroup({
      id: new FormControl(''),
      fullName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      birthDate: new FormControl('', [Validators.required, Validators.min(0)]),
      createdAt: new FormControl(''),
      updatedAt: new FormControl('')
    });
   }

  ngOnInit(): void {
    if(this.data !== null)
    {
      this.userForm.patchValue(this.data);
      this.userForm.get('updatedAt').setValue(new Date());
      this.dialogTitle = 'Update user';
    }else{
      this.userForm.get('createdAt').setValue(new Date());
      this.userForm.get('updatedAt').setValue(new Date());
      this.dialogTitle = 'Add new user';
    }
  }

  saveUser(){
    this.dialogRef.close(this.userForm.value);
  }

}
