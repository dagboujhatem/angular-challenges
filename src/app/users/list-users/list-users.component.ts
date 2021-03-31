import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  @Input() usersList;
  @Output() updateEvent = new EventEmitter<number>()
  @Output() deleteEvent = new EventEmitter<number>()
  constructor() { }

  ngOnInit(): void {
  }

  updateUser(i)
  {
    this.updateEvent.emit(i)
  }

  deleteUser(i)
  {
    this.deleteEvent.emit(i)
  }

}
