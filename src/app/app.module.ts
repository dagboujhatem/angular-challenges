import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Page404Component } from './page404/page404.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListTodoComponent } from './list-todo/list-todo.component';
import { UpdateTodoComponent } from './update-todo/update-todo.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { AddSkillsComponent } from './add-skills/add-skills.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { UpdateProductComponent } from './products/update-product/update-product.component';
import { ListProductsComponent } from './products/list-products/list-products.component';
import { SoldePipe } from './pipes/solde.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { AddUserComponent } from './users/add-user/add-user.component';
import { ListUsersComponent } from './users/list-users/list-users.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    Page404Component,
    ListTodoComponent,
    UpdateTodoComponent,
    AddTodoComponent,
    AddSkillsComponent,
    AddProjectComponent,
    AddProductComponent,
    UpdateProductComponent,
    ListProductsComponent,
    SoldePipe,
    SearchPipe,
    AddUserComponent,
    ListUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
