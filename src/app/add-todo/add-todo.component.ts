import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  submitted = false;
  addTodoForm: FormGroup = new FormGroup({
    id: new FormControl(uuid()),
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
    // this.addTodoForm.reset();
    // this.submitted = false;

    // affect todo to user
    console.log(this.addTodoForm.value);
    
    let connectedUser = JSON.parse(localStorage.getItem('connected-user') || '{}');
    if(connectedUser.affectedTodos == null || connectedUser.affectedTodos == undefined)
    {
      connectedUser.affectedTodos = [];
      connectedUser.affectedTodos.push(this.addTodoForm.value.id);
    }else{
      connectedUser.affectedTodos.push(this.addTodoForm.value.id);
    }
    localStorage.setItem('connected-user', JSON.stringify(connectedUser));


    // redirect to todo list
    this.router.navigate(['todo-list'])

  }
}
