import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  users = []
  index; 
  submitted = false;
  showUpdateButton = false;
  addUserForm: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });
  constructor() { }

  ngOnInit(): void {
  }

  saveUser()
  {
    this.submitted = true;
    if(this.addUserForm.invalid)
    {
      return ;
    }
    this.users.push(this.addUserForm.value);
    this.addUserForm.reset();
    this.submitted = false;
  }

  showUserData(i)
  {
    // console.log(i);
    const userData= this.users[i]
    // console.log(userData);
    this.addUserForm.patchValue(userData);
    this.showUpdateButton = true;
    this.index = i;
  }

  saveUpdate()
  {
    this.submitted = true;
    if(this.addUserForm.invalid)
    {
      return ;
    }
    this.users.splice(this.index, 1 , this.addUserForm.value);
    this.addUserForm.reset();
    this.submitted = false;
    this.showUpdateButton = false;
  }

  onDelete(i){
    this.users.splice(i, 1);
  }

}
