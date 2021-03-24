import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  submitted = false;
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
    console.log(this.addUserForm.value);
    
  }

}
