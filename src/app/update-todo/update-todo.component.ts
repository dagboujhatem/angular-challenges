import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.css']
})
export class UpdateTodoComponent implements OnInit {

  id;
  submitted = false;
  updateTodoForm: FormGroup= new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });
  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // fist way
    this.id = this.activatedRoute.snapshot.params['id'];
    // console.log(this.id);
    this.loadTodoData();

    // secend way
    // this.activatedRoute.params.subscribe((params)=>{
    //     this.id = params['id'];
    //     console.log(this.id);
    //     this.loadTodoData();
    //   });
    
  }

  loadTodoData()
  {
    let todos = JSON.parse(localStorage.getItem('todos') || '[]');
    let index = todos.findIndex(x=> x.id == this.id);
    let todoData = todos[index];
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
    let index = todos.findIndex(x=> x.id == this.id);
    todos.splice(index, 1, this.updateTodoForm.value);
    localStorage.setItem('todos', JSON.stringify(todos));

    // vider form 
    this.updateTodoForm.reset();
    this.submitted = false;

    // redirect to list
     this.router.navigate(['todo-list'])

  }

}
