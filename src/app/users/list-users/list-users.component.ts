import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  users = [{firstName:"kjhvmiuh", lastName:"jisfduivhiu"}]
  constructor() { }

  ngOnInit(): void {
  }

  deleteUser(i)
  {

  }

}
