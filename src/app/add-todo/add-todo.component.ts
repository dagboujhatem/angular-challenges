import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  submitted = false;
  addTodoForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  saveTodo()
  {
    this.submitted = true;
    if(this.addTodoForm.invalid)
    {
      return ;
    }

    let todos = JSON.parse(localStorage.getItem('todos') || '[]');
    todos.push(this.addTodoForm.value);
    localStorage.setItem('todos', JSON.stringify(todos));
    // reset form 
    this.addTodoForm.reset();
    this.submitted = false;

    // redirect to todo list
    this.router.navigate(['todo-list'])

  }
}
