import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddSkillsComponent } from './add-skills/add-skills.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { ListTodoComponent } from './list-todo/list-todo.component';
import { LoginComponent } from './login/login.component';
import { Page404Component } from './page404/page404.component';
import { RegisterComponent } from './register/register.component';
import { UpdateTodoComponent } from './update-todo/update-todo.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'todo-list',
    component: ListTodoComponent
  },
  {
    path: 'add-todo',
    component: AddTodoComponent
  },
  {
    path: 'update-todo/:id',
    component: UpdateTodoComponent
  },
  {
    path: 'add-user-with-skills',
    component: AddSkillsComponent
  },
  {
    path: '**',
    component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
