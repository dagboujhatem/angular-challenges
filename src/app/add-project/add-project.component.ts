import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  submitted = false;
  addProjectForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.addProjectForm = new FormGroup({
      id: new FormControl(uuid()),
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required, Validators.minLength(8)]),
      createdAt: new FormControl(new Date()),
      updatedAt: new FormControl(new Date()),
      technologies: new FormArray([this.createNewTechnologie()])
    });
  }

  get technologies(): FormArray
  {
    return this.addProjectForm.get('technologies') as FormArray;
  }

  createNewTechnologie(): FormControl
  {
    return new FormControl('', [Validators.required]);
  }

  addTechnologie()
  {
    this.technologies.push(this.createNewTechnologie());
  }

  deleteTechnologie(i)
  {
    this.technologies.removeAt(i);
  }

  deleteAllTechnologie()
  {
    this.technologies.clear();
  }

  saveProject()
  {
    this.submitted = true;
    if(this.addProjectForm.invalid)
    {
      return;
    }

    // log value
    console.log(this.addProjectForm.value);
  }

}
