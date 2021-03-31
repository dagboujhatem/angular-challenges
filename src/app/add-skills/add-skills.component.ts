import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

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
    skillsArray: new FormArray([])
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


  get getSkills(): FormArray 
  {
      return this.addUserForm.get('skillsArray') as FormArray;
  }

  addRow()
  {
    this.getSkills.push(new FormGroup({
      skill: new FormControl('', [Validators.required]),
      rating: new FormControl('', [Validators.required])
    }));
    

  }

  removeRow(i)
  {
    this.getSkills.removeAt(i);
  }

  removeLastRow()
  {
    this.getSkills.removeAt(this.getSkills.length -1);
  }

  removeAllRow()
  {
    // last way
    this.getSkills.clear();

    // first way
    // for (let index = 0; this.getSkills.length != 0; index++) {
    //   this.getSkills.removeAt(0);
    // }

    // second way 
    // for (let index = this.getSkills.length; index >= 0; index--) {
    //   this.getSkills.removeAt(index);
    // }


    // third way
    // while (this.getSkills.length !== 0) {
    //   this.getSkills.removeAt(0)
    // }
  }

}
