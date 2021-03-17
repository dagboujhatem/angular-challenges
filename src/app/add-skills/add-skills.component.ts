import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-skills',
  templateUrl: './add-skills.component.html',
  styleUrls: ['./add-skills.component.css']
})
export class AddSkillsComponent implements OnInit {

  submitted = false;
  addUserForm: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(4)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(4)]),
  });
  constructor() { }

  ngOnInit(): void {
  }

  saveData()
  {
    this.submitted = true;
    if(this.addUserForm.invalid)
    {
      return ;
    }

    console.log(this.addUserForm.value);
    

  }

}
