import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProjectComponent } from './add-project/add-project.component';
import { AddSkillsComponent } from './add-skills/add-skills.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { AuthGuard } from './authentification/auth.guard';
import { ListTodoComponent } from './list-todo/list-todo.component';
import { LoginComponent } from './login/login.component';
import { Page404Component } from './page404/page404.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { ListProductsComponent } from './products/list-products/list-products.component';
import { UpdateProductComponent } from './products/update-product/update-product.component';
import { RegisterComponent } from './register/register.component';
import { UpdateTodoComponent } from './update-todo/update-todo.component';
import { AddUserComponent } from './users/add-user/add-user.component';

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
    component: ListTodoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'add-todo',
    component: AddTodoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'update-todo/:id',
    component: UpdateTodoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'add-user-with-skills',
    component: AddSkillsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'add-project',
    component: AddProjectComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'add-product',
    component: AddProductComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'list-products',
    component: ListProductsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'update-product/:index',
    component: UpdateProductComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'users',
    component: AddUserComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'customers',
    canActivate: [AuthGuard],
    loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) 
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
