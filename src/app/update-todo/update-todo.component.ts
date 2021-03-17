import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.css']
})
export class UpdateTodoComponent implements OnInit {

  index;
  submitted = false;
  updateTodoForm: FormGroup= new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });
  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // fist way
    this.index = this.activatedRoute.snapshot.params['index'];
    // console.log(this.index);
    this.loadTodoData();

    // secend way
    // this.activatedRoute.params.subscribe((params)=>{
    //     this.index = params['index'];
    //     console.log(this.index);
    //     this.loadTodoData();
    //   });
    
  }

  loadTodoData()
  {
    let todos = JSON.parse(localStorage.getItem('todos') || '[]');
    let todoData = todos[this.index];
    this.updateTodoForm.patchValue(todoData);

    
  }

  saveTodo()
  {
    this.submitted = true;
    if(this.updateTodoForm.invalid)
    {
      return ;
    }

    let todos = JSON.parse(localStorage.getItem('todos') || '[]');
    todos.splice(this.index, 1, this.updateTodoForm.value);
    localStorage.setItem('todos', JSON.stringify(todos));

    // vider form 
    this.updateTodoForm.reset();
    this.submitted = false;

    // redirect to list
     this.router.navigate(['todo-list'])

  }

}
