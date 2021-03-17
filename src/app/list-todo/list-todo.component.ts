import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {

  todos = JSON.parse(localStorage.getItem('todos') || '[]');
  constructor() { }

  ngOnInit(): void {
  }

  deleteTask(id){
    let index = this.todos.findIndex(x=> x.id == id);
    this.todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(this.todos))
  }

}
